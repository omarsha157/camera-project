function navSlide() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    })
}

function navClose() {

    const nav = document.querySelector('.nav-links');
    const navlinks = document.querySelectorAll('.nav-links li a')
    navlinks.forEach(link => 
        link.addEventListener('click', () => {
            nav.classList.remove('nav-active');
        })
        )
}

navSlide();

navClose();