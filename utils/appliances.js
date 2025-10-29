// utils/appliances.js
// You can edit wattages to match your local market.
export const APPLIANCES = [
  { id: "led-bulb",     name: "LED Bulb",               watts: 9,   surge: 1.0 },
  { id: "tube-light",   name: "Tube Light (LED)",       watts: 20,  surge: 1.0 },
  { id: "fan",          name: "Ceiling Fan",            watts: 60,  surge: 1.2 },
  { id: "tv",           name: "LED TV (32-43\")",       watts: 80,  surge: 1.2 },
  { id: "laptop",       name: "Laptop",                 watts: 65,  surge: 1.2 },
  { id: "router",       name: "Wi-Fi Router",           watts: 12,  surge: 1.0 },
  { id: "fridge",       name: "Refrigerator (200-300L)",watts: 150, surge: 3.0 }, // compressor surge
  { id: "washing",      name: "Washing Machine",        watts: 500, surge: 2.0 },
  { id: "mixer",        name: "Mixer/Grinder",          watts: 450, surge: 2.0 },
  { id: "iron",         name: "Electric Iron",          watts: 1000, surge: 1.5 },
  { id: "geyser",       name: "Geyser/Water Heater",    watts: 2000, surge: 1.2 },
  { id: "ac-1ton",      name: "AC (1 Ton Inverter)",    watts: 900, surge: 3.5 },
  { id: "ac-1_5ton",    name: "AC (1.5 Ton Inverter)",  watts: 1300, surge: 3.5 },
  { id: "cooler",       name: "Air Cooler",             watts: 180, surge: 1.5 },
  { id: "pump-1hp",     name: "Water Pump (1 HP)",      watts: 750, surge: 3.0 },
  { id: "microwave",    name: "Microwave Oven",         watts: 1200, surge: 1.2 },
  { id: "toaster",      name: "Toaster",                watts: 800, surge: 1.2 }
];
