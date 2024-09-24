var nextBtn = document.querySelector('.next'),
    prevBtn = document.querySelector('.prev'),
    carousel = document.querySelector('.carousel'),
    list = document.querySelector('.list'), 
    item = document.querySelectorAll('.item'),
    runningTime = document.querySelector('.carousel .timeRunning') 

    document.querySelector('#menu-btn').onclick = () =>{
        navbar.classList.toggle('active');
     };
// Array de objetos que contiene el nombre y la URL de la imagen
const itemsData = [
    { name: 'EAGLE', imageUrl: 'url(image/eagel1.jpg)' },
    { name: 'OWL', imageUrl: 'url(image/owl1.jpg)' },
    { name: 'CROW', imageUrl: 'url(image/crow.jpg)' },
    { name: 'BUTTERFLY', imageUrl: 'url(image/butterfly1.jpeg)' },
    { name: 'OWL', imageUrl: 'url(image/owl2.jpg)' },
    { name: 'EAGLE', imageUrl: 'url(image/eagel3.jpg)' },
    { name: 'KINGFISHER', imageUrl: 'url(image/kingfirser2.jpeg)' },
    { name: 'PARROT', imageUrl: 'url(image/parrot2.jpg)' },
    { name: 'HERON', imageUrl: 'url(image/heron.jpeg)' },
    { name: 'BUTTERFLY', imageUrl: 'url(image/butterfly2.jpg)' },
    { name: 'PARROT', imageUrl: 'url(image/parrot2.jpg)' },
];
let timeRunning = 2000 
let timeAutoNext = 5000


let currentIndex = 0;

// Cambiar al siguiente elemento del array
nextBtn.onclick = function() {

    showSlider('next')
}

// Cambiar al elemento anterior
prevBtn.onclick = function() {

    showSlider('prev')
}

let runTimeOut 

let runNextAuto = setTimeout(() => {
    nextBtn.click()
}, timeAutoNext)


function updateDescription() {
    let currentItem = itemsData[currentIndex];
    
    // Actualiza el contenido del fondo y la descripción
    let descriptionItem = document.querySelector('.carousel .description .item');
    descriptionItem.style.backgroundImage = currentItem.imageUrl; // Fondo
    descriptionItem.querySelector('.name').textContent = currentItem.name; // Nombre
    descriptionItem.querySelector('.des').textContent = `Descripción de ${currentItem.name}`; // Descripción
}

function resetTimeAnimation() {
    runningTime.style.animation = 'none'
    runningTime.offsetHeight /* trigger reflow */
    runningTime.style.animation = null 
    runningTime.style.animation = 'runningTime 4s linear 1 forwards'
}


function showSlider(type) {
    let sliderItemsDom = list.querySelectorAll('.carousel .list .item')
    if(type === 'next'){
        currentIndex = (currentIndex + 1) % itemsData.length;  
        // Asegúrate de que el índice no se pase del array
        list.appendChild(sliderItemsDom[0])
        carousel.classList.add('next')
    } else{
        currentIndex = (currentIndex - 1 + itemsData.length) % itemsData.length;  // Para el anterior
        list.prepend(sliderItemsDom[sliderItemsDom.length - 1])
        carousel.classList.add('prev')
    }

     // Actualizar la descripción con el nuevo contenido
     updateDescription();

    clearTimeout(runTimeOut)

    runTimeOut = setTimeout( () => {
        carousel.classList.remove('next')
        carousel.classList.remove('prev')
    }, timeRunning)


    clearTimeout(runNextAuto)
    runNextAuto = setTimeout(() => {
        nextBtn.click()
    }, timeAutoNext)

    resetTimeAnimation() // Reset the running time animation
}

// Inicializa el contenido de la descripción al cargar
updateDescription();

// Start the initial manu hamburger
resetTimeAnimation()
let menu = document.querySelector('#menu-btn');
let navbarLinks = document.querySelector('.header .navbar .links');

menu.onclick = () =>{
   menu.classList.toggle('fa-times');
   navbarLinks.classList.toggle('active');
}

window.onscroll = () =>{
   menu.classList.remove('fa-times');
   navbarLinks.classList.remove('active');

   if(window.scrollY > 60){
      document.querySelector('.header .navbar').classList.add('active');
   }else{
      document.querySelector('.header .navbar').classList.remove('active');
   }
}