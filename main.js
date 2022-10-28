const nav = document.querySelector('.nav__links');
const openNavBtn = document.querySelector('#nav__toggle-open');
const closeNavBtn = document.querySelector('#nav__toggle-close');

// function to open nav menu or dropdown
const openNav = () => {
    nav.style.display = 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'inline-block';
}

openNavBtn.addEventListener('click', openNav)


// function to close nav menu or dropdown
const closeNav = () => {
    nav.style.display = 'none';
    openNavBtn.style.display = 'inline-block';
    closeNavBtn.style.display = 'none';
}

closeNavBtn.addEventListener('click', closeNav)


// ADDED AFTER TUTORIAL
// closes when we click anywhere (besides hamburger) after nav menu is open
window.addEventListener('click', (e) => {
    if(e.target.className != 'uil uil-bars') {
        closeNav();
    }
})


// ADDED AFTER TUTORIAL
// reload page when resized
window.onresize = () => {
    location.reload();
}