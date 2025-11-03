function showSection(id) {
  document.querySelectorAll(".calculator").forEach(el => el.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
  window.scrollTo({ top: document.getElementById(id).offsetTop - 20, behavior: "smooth" });
}

// ✅ Convert value to meters
function convertToMeters(value, unit) {
  switch (unit) {
    case "cm": return value / 100;
    case "m": return value;
    case "ft": return value * 0.3048;
    default: return value;
  }
}

// 🧮 Truck calculator
document.getElementById('truckForm')?.addEventListener('submit', e => {
  e.preventDefault();
  const L = parseFloat(tLength.value);
  const W = parseFloat(tWidth.value);
  const H = parseFloat(tHeight.value);
  const qty = parseInt(tQty.value);
  const truckType = truckType.value;
  const unit = tUnit.value;

  const Lm = convertToMeters(L, unit);
  const Wm = convertToMeters(W, unit);
  const Hm = convertToMeters(H, unit);

  const capacity = { "Tata Ace": 3.5, "14ft": 24, "19ft": 45 }[truckType];
  const totalVol = Lm * Wm * Hm * qty;
  const trucks = Math.ceil(totalVol / capacity);

  truckResult.innerHTML = `
    <h3>Result</h3>
    <p>Total Volume: <b>${totalVol.toFixed(2)} m³</b></p>
    <p>Truck Capacity: <b>${capacity} m³</b></p>
    <p>🚛 Required Trucks: <b>${trucks}</b></p>
  `;
});

// 🧮 Container calculator
document.getElementById('containerForm')?.addEventListener('submit', e => {
  e.preventDefault();
  const L = parseFloat(cLength.value);
  const W = parseFloat(cWidth.value);
  const H = parseFloat(cHeight.value);
  const qty = parseInt(cQty.value);
  const containerType = containerType.value;
  const unit = cUnit.value;

  const Lm = convertToMeters(L, unit);
  const Wm = convertToMeters(W, unit);
  const Hm = convertToMeters(H, unit);

  const capacity = { "20ft": 33, "40ft": 67 }[containerType];
  const totalVol = Lm * Wm * Hm * qty;
  const containers = Math.ceil(totalVol / capacity);

  containerResult.innerHTML = `
    <h3>Result</h3>
    <p>Total Volume: <b>${totalVol.toFixed(2)} m³</b></p>
    <p>Container Capacity: <b>${capacity} m³</b></p>
    <p>🚢 Required Containers: <b>${containers}</b></p>
  `;
});
