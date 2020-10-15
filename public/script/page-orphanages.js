// creat map
const map = L.map("mapid").setView([-22.5052109,-44.1243454], 15); /*  -22.5052109,-44.1243454  / -27.222633, -49.6455874 */
// creat and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);
// creat icon
const icon = L.icon({
  iconUrl: "./public/imagens/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29,68],
  popupAnchor: [170,2]
})
// creat popup overlay
const popup = L.popup({
  closeButton: false,
  className: 'map-popup',
  minWidth: 240,
  minHeight: 240, 
}).setContent('Lar das meninas <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/imagens/arrow-white.svg"> </a>')

// creat and add marker
L.marker([-22.5052109,-44.1243454], {icon})
  .addTo(map)
  .bindPopup(popup)



  /*parei em 01:28:27*/ 