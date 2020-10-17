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
    const fieldsContainer = document.querySelectorAll('.new-upload')
    // realizar o clone da ultima imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
  //verificar se  campo esta vazio, se sim não add ao container de imagens
  const input = newFieldContainer.children[0]
  if(input.value == "") {
    return
  }
    //limpar o campo antes de add ao container de imagens
   input.value = ""
    // adicionar o clone ao container de #images
    container.appendChild(newFieldContainer)
}

function deleteField(event) {
  const span = event.currentTarget

  const fieldsContainer = document.querySelectorAll('.new-upload')

  if(fieldsContainer.length < 2){
    // limpar o valor do campo
    span.parentNode.children[0].value = ""
    return
  }
  // deletar o campo
  span.parentNode.remove();

}

// selecionar sim ou não
function toggleSelect(event) {
  // retirar a class .active (ds botões)
  document.querySelectorAll('.button-select button')
  .forEach(button => button.classList.remove('active'))
  //colocar a class .active nesse botão clicado
  const button = event.currentTarget
  button.classList.add('active')
  // atualizar o meu input hidden com o valor selecionado
  const input = document.querySelector('[name="open_on_weekends"]')
  // verificar se sim ou não
  input.value = button.dataset.value
}
/* finalizada aula 03 */
