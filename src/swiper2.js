
let clickButton = document.querySelector('.section-swiper2-form__button');
let textButton = document.querySelector('.section-swiper2-form__label');
let elemSectionUl = document.querySelector('.section-swiper2-container-ul');

clickButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (textButton.textContent === 'Показать все') {
    textButton.textContent = 'Скрыть';
    elemSectionUl.classList.add('hidden-swiper2');
    } else {
    textButton.textContent = 'Показать все';
    elemSectionUl.classList.remove('hidden-swiper2');
    }  
});