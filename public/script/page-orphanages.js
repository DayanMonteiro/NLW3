// creat map
const map = L.map("mapid").setView([-27.222633, -49.6455874], 15)
// creat and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map)

// creat icon


// creat and add marker
L.marker([-27.222633, -49.6455874])
  .addTo(map)
  .bindPopup("A pretty CSS3 popup.<br> Easily customizable.")
  .openPopup()


  /*parei em 01:28:27*/ 