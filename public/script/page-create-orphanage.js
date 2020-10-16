// creat map
const map = L.map("mapid").setView([-22.5052109,-44.1243454], 15); 


// creat and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);
// creat icon
const icon = L.icon({
  iconUrl: "./public/imagens/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29,68],
})

let marker; /*inicio ela vazia*/

// creat and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // remove icon
    marker && map.removeLayer(marker)

    // add icon layer
    marker = L.marker([lat, lng], { icon })
    .addTo(map)
})

// add fotos
function addPhotoField() {
    // pegar o container de fotos #images
    const container = document.querySelector('#images')
    // pegar o container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-image')
    // realizar o clone da ultima imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    // adicionar o clone ao container de #images
    container.appendChild()

}



/*
// creat and add marker
L.marker([-22.4773864,-44.1425828], {icon})
  .addTo(map)
  .bindPopup(popup)*/

/* 1:26:00 aula 03 */
