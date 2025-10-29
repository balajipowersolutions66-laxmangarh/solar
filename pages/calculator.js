// pages/calculator.js
import { useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import { APPLIANCES } from "../utils/appliances";
import {
  calcTotalLoadWh, calcRunningWatts, calcSurgeWatts,
  calcBatteryWh, whToAhWithDoD, calcInverterW, wattsToKva,
  adjustWhForLosses, calcArrayWatts, suggestBatteryCount, suggestPanelCount
} from "../utils/solarCalc";

import jsPDF from "jspdf";
import "jspdf-autotable";

// ⚠️ Replace with your Base64 logo (convert logo.png to Base64)
const LOGO_BASE64 = "data:image/png;base64,iVBORw0KGgoAAAANS...";

function exportPDF(totals, rows, backupHours, systemVoltage, batteryChem, panelW) {
  const doc = new jsPDF("p", "pt", "a4");

  // ✅ Watermark
  doc.addImage(LOGO_BASE64, "PNG", 100, 200, 400, 400, "", "FAST");
  doc.setTextColor(200, 200, 200);
  doc.setFontSize(50);
  doc.text("Sri Balaji Power Solutions", 80, 500, { angle: 45 });

  // ✅ Header
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(18);
  doc.text("Sri Balaji Power Solutions", 40, 40);
  doc.setFontSize(12);
  doc.text("Solar Requirement Report", 40, 60);
  doc.text(`Date: ${new Date().toLocaleDateString()}`, 400, 40);

  // ✅ System Info
  doc.text(`Backup Hours: ${backupHours} hrs`, 40, 90);
  doc.text(`System Voltage: ${systemVoltage} V`, 40, 105);
  doc.text(`Battery Type: ${batteryChem}`, 40, 120);
  doc.text(`Panel Rating: ${panelW} W`, 40, 135);

  // ✅ Appliances Table
  const tableRows = rows
    .filter(r => r.qty > 0 && r.hours > 0)
    .map(r => [r.name, r.watts, r.qty, r.hours, Math.round(r.watts * r.qty * r.hours)]);

  doc.autoTable({
    startY: 160,
    head: [["Appliance", "Watts", "Qty", "Hours/Day", "Daily Wh"]],
    body: tableRows,
  });

  // ✅ Summary
  let finalY = doc.lastAutoTable.finalY + 20;
  doc.setFontSize(14);
  doc.text("System Summary", 40, finalY);

  doc.setFontSize(12);
  finalY += 15;
  doc.text(`Daily Energy: ${Math.round(totals.totalWh)} Wh`, 40, finalY);
  finalY += 15;
  doc.text(`Inverter Size: ${Math.round(totals.inverterW)} W (~${totals.inverterKva.toFixed(2)} kVA)`, 40, finalY);
  finalY += 15;
  doc.text(`Battery Bank: ${Math.round(totals.ah)} Ah @ ${systemVoltage}V`, 40, finalY);
  finalY += 15;
  doc.text(`Suggested Batteries: ${totals.battCount.total} (Series: ${totals.battCount.series}, Parallel: ${totals.battCount.parallel})`, 40, finalY);
  finalY += 15;
  doc.text(`Solar Array: ~${Math.round(totals.arrayWatts)} W (${totals.panelCount} × ${panelW}W panels)`, 40, finalY);

  // ✅ Footer
  finalY += 30;
  doc.setFontSize(10);
  doc.text("Note: This is an approximate calculation. Actual design depends on site survey & compliance.", 40, finalY);
  doc.text("© Sri Balaji Power Solutions | Contact: +91-XXXXXXXXXX", 40, finalY + 12);

  // ✅ Permissions (works in jsPDF >=2.5, not all viewers enforce)
  if (doc.setPermissions) {
    doc.setPermissions({
      printing: "none",
      modifying: false,
      copying: false,
      annotating: false,
      fillingForms: false,
      contentAccessibility: false,
      documentAssembly: false,
    });
  }

  doc.save("Solar_Requirement_Report.pdf");
}

export default function Calculator() {
  const [rows, setRows] = useState(
    APPLIANCES.map(a => ({ id: a.id, name: a.name, watts: a.watts, surge: a.surge, qty: 0, hours: 0 }))
  );

  const [mode, setMode] = useState("hybrid");
  const [sunHours, setSunHours] = useState(5);
  const [systemVoltage, setSystemVoltage] = useState(24);
  const [batteryChem, setBatteryChem] = useState("lithium");
  const [backupHours, setBackupHours] = useState(4);
  const [panelW, setPanelW] = useState(450);

  const sysEff = 0.85;
  const pf = 0.8;
  const headroomPct = 20;
  const usableDoD = batteryChem === "lithium" ? 0.8 : 0.5;

  const totals = useMemo(() => {
    const totalWh = calcTotalLoadWh(rows);
    const runW = calcRunningWatts(rows);
    const surgeW = calcSurgeWatts(rows);

    const hourlyWh = totalWh / 24;
    const backupWh = hourlyWh * backupHours;
    const batteryWh = calcBatteryWh(totalWh, backupHours);

    const { ah, requiredWhAtBank } = whToAhWithDoD(backupWh, systemVoltage, usableDoD);
    const inverterW = calcInverterW(runW, surgeW, headroomPct);
    const inverterKva = wattsToKva(inverterW, pf);

    const adjustedDailyWh = adjustWhForLosses(totalWh, sysEff);
    const arrayWatts = calcArrayWatts(adjustedDailyWh, sunHours);

    const battCount = suggestBatteryCount(ah, systemVoltage, 150, 12);
    const panelCount = suggestPanelCount(arrayWatts, panelW);

    return {
      totalWh, runW, surgeW,
      backupWh, batteryWh,
      bankWh: requiredWhAtBank, ah,
      inverterW, inverterKva,
      adjustedDailyWh, arrayWatts,
      battCount, panelCount
    };
  }, [rows, backupHours, systemVoltage, usableDoD, headroomPct, pf, sysEff, sunHours, panelW]);

  const updateCell = (idx, key, value) => {
    const copy = [...rows];
    copy[idx][key] = value;
    setRows(copy);
  };

  return (
    <div className="bg-pearl min-h-screen">
      <Navbar />
      <main className="pt-24 px-6 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-emerald">Solar Sizing Calculator</h1>

        {/* Appliance Table */}
        <section className="mt-8 bg-white rounded-xl shadow p-4">
          <h2 className="text-xl font-semibold text-emerald mb-3">Appliances</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-left text-gray-600">
                  <th className="p-2">Appliance</th>
                  <th className="p-2">Watts</th>
                  <th className="p-2">Qty</th>
                  <th className="p-2">Hours/Day</th>
                  <th className="p-2">Surge×</th>
                  <th className="p-2">Daily Wh</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, idx) => {
                  const dailyWh = (r.watts || 0) * (r.qty || 0) * (r.hours || 0);
                  return (
                    <tr key={r.id} className="border-t">
                      <td className="p-2">{r.name}</td>
                      <td className="p-2"><input type="number" value={r.watts} onChange={e => updateCell(idx, "watts", parseFloat(e.target.value)||0)} className="border rounded p-1 w-24"/></td>
                      <td className="p-2"><input type="number" value={r.qty} onChange={e => updateCell(idx, "qty", parseFloat(e.target.value)||0)} className="border rounded p-1 w-20"/></td>
                      <td className="p-2"><input type="number" value={r.hours} onChange={e => updateCell(idx, "hours", parseFloat(e.target.value)||0)} className="border rounded p-1 w-24"/></td>
                      <td className="p-2"><input type="number" step="0.1" value={r.surge} onChange={e => updateCell(idx, "surge", parseFloat(e.target.value)||1)} className="border rounded p-1 w-24"/></td>
                      <td className="p-2">{Math.round(dailyWh)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        {/* Recommendations */}
        <section className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow p-5">
            <h3 className="text-lg font-semibold text-emerald mb-2">Panels & Inverter</h3>
            <p>Adjusted Daily Energy: <b>{Math.round(totals.adjustedDailyWh)} Wh/day</b></p>
            <p>Solar Array: <b>{Math.round(totals.arrayWatts)} W</b> (~{totals.panelCount} × {panelW}W)</p>
            <p>Inverter Size: <b>{Math.round(totals.inverterW)} W</b> (~{totals.inverterKva.toFixed(2)} kVA)</p>
          </div>

          <div className="bg-white rounded-xl shadow p-5">
            <h3 className="text-lg font-semibold text-emerald mb-2">Battery Bank</h3>
            <p>Backup Energy: <b>{Math.round(totals.backupWh)} Wh</b></p>
            <p>Required Capacity: <b>{Math.ceil(totals.ah)} Ah @ {systemVoltage}V</b></p>
            <p>Suggested Batteries: <b>{totals.battCount.total}</b> (Series: {totals.battCount.series}, Parallel: {totals.battCount.parallel})</p>
          </div>
        </section>

        {/* PDF Button */}
        <div className="text-center mt-6">
          <button
            onClick={() => exportPDF(totals, rows, backupHours, systemVoltage, batteryChem, panelW)}
            className="px-6 py-3 bg-emerald text-white rounded shadow hover:scale-105 transition"
          >
            📄 Download PDF Report
          </button>
        </div>

        {/* Notes & Factors (Eng + Hindi) */}
        <section className="mt-8 bg-parrot rounded-xl p-5">
          <h4 className="font-semibold text-emerald mb-2">What affects runtime / sizing?</h4>
          <ul className="list-disc pl-5 text-sm text-gray-800 space-y-1">
            <li>Peak-sun hours — fewer hours ⇒ more panels.</li>
            <li>DoD (Depth of Discharge) — lead-acid ~50%, lithium ~80–90% usable.</li>
            <li>Inverter efficiency & wiring losses — ~15% combined loss.</li>
            <li>Surge loads (fridge, AC, pump) — need higher surge inverter.</li>
            <li>Temperature — affects battery & panel performance.</li>
            <li>Shading & tilt — can drastically cut output.</li>
          </ul>
          <h4 className="font-semibold text-emerald mt-6 mb-2">क्या चीज़ें रनटाइम / साइज़िंग को प्रभावित करती हैं?</h4>
          <ul className="list-disc pl-5 text-sm text-gray-800 space-y-1">
            <li>पीक-सन आवर्स — कम धूप ⇒ अधिक पैनल चाहिए।</li>
            <li>डीओडी — लेड-एसिड ~50%, लिथियम ~80–90%।</li>
            <li>इन्वर्टर एफिशिएंसी — ~15% नुकसान।</li>
            <li>सर्ज लोड्स — एसी/फ्रिज के लिए हाई सर्ज इन्वर्टर।</li>
            <li>तापमान — बैटरी और पैनल गर्म/ठंड में बदलते हैं।</li>
            <li>छाया और झुकाव — आउटपुट कम कर सकते हैं।</li>
          </ul>
        </section>

        {/* Know Your Equipments */}
        <section className="mt-8 bg-white rounded-xl shadow p-6">
          <h3 className="text-2xl font-bold text-emerald mb-4">Know Your Equipments (अपना उपकरण जानें)</h3>
          <h4 className="text-xl font-semibold text-yellow-700 mb-2">🔌 इन्वर्टर और बैटरी कॉम्बिनेशन</h4>
          <ul className="list-disc pl-5 text-sm text-gray-800 space-y-1 mb-4">
            <li>12V इन्वर्टर → 1 बैटरी, छोटे लोड्स, ~4 घंटे बैकअप।</li>
            <li>24V इन्वर्टर → 2 बैटरियां, मध्यम लोड्स, ~6 घंटे बैकअप।</li>
            <li>48V इन्वर्टर → 4 बैटरियां, बड़े घर/ऑफिस, लंबा बैकअप।</li>
          </ul>
          <h4 className="text-xl font-semibold text-yellow-700 mb-2">🔋 बैटरी के प्रकार</h4>
          <ul className="list-disc pl-5 text-sm text-gray-800 space-y-1 mb-4">
            <li>लीड-एसिड — सस्ती, 3–5 साल, रखरखाव ज़रूरी।</li>
            <li>ट्यूबुलर — 5–7 साल, बेहतर परफ़ॉर्मेंस।</li>
            <li>लिथियम-आयन — हल्की, तेज़ चार्ज, 8–12 साल।</li>
            <li>LiFePO₄ — सुरक्षित, 4000+ साइकल, महंगी।</li>
          </ul>
          <h4 className="text-xl font-semibold text-yellow-700 mb-2">☀️ सोलर पैनल के प्रकार</h4>
          <ul className="list-disc pl-5 text-sm text-gray-800 space-y-1">
            <li>पॉलीक्रिस्टलाइन — सस्ता, 15–17% एफिशिएंसी।</li>
            <li>मोनोक्रिस्टलाइन — 18–22% एफिशिएंसी, लोकप्रिय।</li>
            <li>बाइफ़ेशियल — सामने-पीछे धूप, 10–20% ज़्यादा।</li>
            <li>थिन-फिल्म — हल्का, लचीला, कम एफिशिएंसी।</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
