document.getElementById("theme-btn").addEventListener("click", function () {
  const dashboard = document.getElementById("dashboard");
  const colors = ["#3498db", "#2ecc71", "#e74c3c", "#f1c40f"]; // Custom hexadecimal colors
  let currentColor = window.getComputedStyle(dashboard).backgroundColor;
  let nextColorIndex = (colors.indexOf(rgbToHex(currentColor)) + 1) % colors.length;
  dashboard.style.backgroundColor = colors[nextColorIndex];
});

function rgbToHex(rgb) {
  const rgbValues = rgb.match(/\d+/g);
  return `#${((1 << 24) + (parseInt(rgbValues[0]) << 16) + (parseInt(rgbValues[1]) << 8) + parseInt(rgbValues[2])).toString(16).slice(1)}`;
}