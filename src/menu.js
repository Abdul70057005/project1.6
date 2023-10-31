const burger = document.querySelector('.button__burger');
const menu = document.querySelector('.aside-wrapper');
const closeburger = document.querySelector('.aside-header__button');
const closeburger2 = document.querySelector('.aside-wrapper');
const scrol = document.querySelector('body');

burger.addEventListener('click', () => {
    if (menu.classList.contains('aside-wrapper--hidden') == true) {
        menu.classList.remove('aside-wrapper--hidden');
        scrol.classList.add('scrol-stop')
    } else {
        menu.classList.add('aside-wrapper--hidden')
    }
});

closeburger.addEventListener('click', () => {
    if (menu.classList.contains('aside-wrapper--hidden') == true) {
        menu.classList.remove('aside-wrapper--hidden')
    } else {
        menu.classList.add('aside-wrapper--hidden')
        scrol.classList.remove('scrol-stop')
    }
});

closeburger2.addEventListener('click', (e) => {
    const target = e.target 
    if ((menu.classList.contains('aside-wrapper--hidden') == false) && (!target.closest('.aside__body') && !target.closest('.button__burger'))) {
        menu.classList.add('aside-wrapper--hidden')
        scrol.classList.remove('scrol-stop')
    } 
});
 
