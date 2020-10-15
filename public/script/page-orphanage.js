const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

// creat map
const map = L.map("mapid", options).setView([-27.222633, -49.6455874], 15)
// creat and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map)

// creat icon
const icon = L.icon({
  iconUrl: "./public/imagens/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29,68],
  popupAnchor: [170,2]
})

// creat and add marker
L.marker([-27.222633, -49.6455874], {icon})
.addTo(map)

/*image gallery*/

function selectImage(event){
    const button = event.currentTarget
    console.log(button.children)
    // remover as classes active e deixá-la apenas em um button
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)
    
    function removeActiveClass(button) {
        button.classList.remove('active')
    }
    // selcionar a imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    // atualizar o container de imagem, ou seja, a imagem central na pagina
    imageContainer.src = image.src


    // adicionar a classe.active para o botão clicado button.classList.add('active')
    button.classList.add('active')
}


/*02:46:23*/