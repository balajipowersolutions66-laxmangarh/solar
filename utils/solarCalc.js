// utils/solarCalc.js

// Sum of (power * hours * quantity) = Wh per day
export function calcTotalLoadWh(rows) {
  return rows.reduce((sum, r) => (
    sum + (r.watts || 0) * (r.hours || 0) * (r.qty || 0)
  ), 0);
}

// Peak running watts (for inverter sizing) = sum of (watts * qty) for selected loads
export function calcRunningWatts(rows) {
  return rows.reduce((sum, r) => sum + (r.watts || 0) * (r.qty || 0), 0);
}

// Peak surge watts = max of (watts * surge * qty) among surgey loads OR sum with surgeFactorStrict
export function calcSurgeWatts(rows) {
  // conservative: take the maximum single-device surge, plus the rest running
  let running = 0;
  let maxSurgeExtra = 0;
  rows.forEach(r => {
    const run = (r.watts || 0) * (r.qty || 0);
    running += run;
    const surgeExtra = ((r.watts || 0) * (r.surge || 1) - (r.watts || 0)) * (r.qty || 0);
    if (surgeExtra > maxSurgeExtra) maxSurgeExtra = surgeExtra;
  });
  return running + maxSurgeExtra;
}

// Battery Wh needed for backup hours
export function calcBatteryWh(totalLoadWh, backupHours = 4) {
  return totalLoadWh * (backupHours / 24); // if backupHours is for outage window from daily load
  // If you intend full load for full backupHours: return totalLoadWhPerHour * backupHours
}

// Convert Wh to Ah for given DC bus voltage & DoD
export function whToAhWithDoD(batteryWh, systemVoltage = 24, usableDoD = 0.8) {
  // usable DoD (0.8 for Li, 0.5 for Lead-acid typical)
  const requiredWhAtBank = batteryWh / usableDoD;
  const ah = requiredWhAtBank / systemVoltage;
  return { ah, requiredWhAtBank };
}

// Inverter size (W) with surge & headroom
export function calcInverterW(runningWatts, surgeWatts, headroomPct = 20) {
  const base = Math.max(runningWatts, surgeWatts);
  return base * (1 + headroomPct / 100);
}

// Convert inverter W to kVA using PF (0.8 typical)
export function wattsToKva(watts, powerFactor = 0.8) {
  return watts / (1000 * powerFactor);
}

// Adjust for system/inverter efficiency & wiring losses
export function adjustWhForLosses(dailyWh, sysEff = 0.85) {
  return dailyWh / sysEff; // e.g., 0.85 overall efficiency (inverter + wiring + controller)
}

// Solar array (W) = adjusted daily Wh / sun-hours
export function calcArrayWatts(adjustedDailyWh, sunHours = 5) {
  return adjustedDailyWh / sunHours;
}

// Helper: count number of 12V 150Ah batteries to meet Ah at voltage
export function suggestBatteryCount(ahRequired, systemVoltage, unitAh = 150, unitVolt = 12) {
  // Series count to reach system voltage
  const series = Math.ceil(systemVoltage / unitVolt);
  // Parallel strings to reach Ah
  const parallel = Math.ceil(ahRequired / unitAh);
  return { series, parallel, total: series * parallel };
}

// Helper: suggest panel count for a given panel watt rating
export function suggestPanelCount(arrayWatts, panelW = 450) {
  return Math.ceil(arrayWatts / panelW);
}
