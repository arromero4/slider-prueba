let nextBtn = document.querySelector('.next')
let prevBtn = document.querySelector('.prev')
let carousel = document.querySelector('.carousel')
let list = document.querySelector('.list')
let item = document.querySelectorAll('.item')
runningTime = document.querySelector('.carousel .timeRunning')

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
};

let timeRunning = 5000
let timeAutoNext = 5000

nextBtn.onclick = function () {
    showSlider('next')
}

prevBtn.onclick = function () {
    showSlider('prev')
}

let runTimeOut

let runNextAuto = setTimeout(() => {
    nextBtn.click()
}, timeAutoNext)


function resetTimeAnimation() {
    runningTime.style.animation = 'none'
    runningTime.offsetHeight /* trigger reflow */
    runningTime.style.animation = null
    runningTime.style.animation = 'runningTime 4s linear 1 forwards'
}


function showSlider(type) {
    let sliderItemsDom = list.querySelectorAll('.carousel .list .item')

    if (type === 'next') {
        list.appendChild(sliderItemsDom[0])
            // Accede al contenido de texto del elemento con la clase 'name'
            let oldName = sliderItemsDom[1].querySelector('.name');
            let newName = sliderItemsDom[2].querySelector('.name');
    
            if (oldName && newName) {
                // Reemplaza el contenido de texto del nuevo elemento con el del viejo
                oldName.textContent = newName.textContent;
            }
        
        carousel.classList.add('next')
    } else {
        list.prepend(sliderItemsDom[sliderItemsDom.length - 1])
        carousel.classList.add('prev')

    }

    clearTimeout(runTimeOut)

    runTimeOut = setTimeout(() => {
        carousel.classList.remove('next')
        carousel.classList.remove('prev')

    }, timeRunning)


    clearTimeout(runNextAuto)
    runNextAuto = setTimeout(() => {
        nextBtn.click()
    }, timeAutoNext)

    resetTimeAnimation() // Reset the running time animation
}

// Start the initial animation 

// // Start the initial manu hamburger
resetTimeAnimation()
let menu = document.querySelector('#menu-btn');
let navbarLinks = document.querySelector('.header .navbar .links');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbarLinks.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbarLinks.classList.remove('active');

    if (window.scrollY > 60) {
        document.querySelector('.header .navbar').classList.add('active');
    } else {
        document.querySelector('.header .navbar').classList.remove('active');
    }
}