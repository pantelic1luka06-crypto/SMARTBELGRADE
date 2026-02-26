// Žitelji – minimal JS (dropdown + optional Leaflet map placeholder)
(function(){
  const btn = document.querySelector(".menu-btn");
  const dropdown = document.querySelector(".menu-dropdown");
  if(btn && dropdown){
    const close = () => {
      dropdown.style.display = "none";
      btn.setAttribute("aria-expanded","false");
    };
    btn.addEventListener("click", () => {
      const open = dropdown.style.display === "block";
      dropdown.style.display = open ? "none" : "block";
      btn.setAttribute("aria-expanded", open ? "false" : "true");
    });
    document.addEventListener("click", (e) => {
      if(!dropdown.contains(e.target) && e.target !== btn){
        close();
      }
    });
    document.addEventListener("keydown", (e) => {
      if(e.key === "Escape") close();
    });
  }

  // Leaflet map (optional) – if Leaflet is loaded, show a simple map centered on Belgrade
  if(typeof L !== "undefined"){
    const mapEl = document.getElementById("mapZ");
    if(mapEl){
      const map = L.map("mapZ", { scrollWheelZoom: false }).setView([44.8176, 20.4633], 12);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors"
      }).addTo(map);
      L.marker([44.8176, 20.4633]).addTo(map).bindPopup("Beograd");
    }
  }
})();
