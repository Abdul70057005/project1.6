/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "../node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ "../node_modules/swiper/modules/index.mjs");


document.addEventListener('DOMContentLoaded', function () {
  if (window.innerWidth < 768) {
    var swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.swiper', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      breakpoints: {
        320: {
          slidesPerView: 1.2,
          spaceBetween: 0
        },
        500: {
          slidesPerView: 2,
          spaceBetween: 0
        },
        680: {
          slidesPerView: 2.7,
          spaceBetween: 0
        },
        750: {
          slidesPerView: 3,
          spaceBetween: 0
        }
      },
      modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Pagination]
    });
  }
});
var clickButton = document.querySelector('.section-form__button');
var textButton = document.querySelector('.section-form__label');
var elemSectionUl = document.querySelector('.section-container-ul');
clickButton.addEventListener('click', function (evt) {
  evt.preventDefault();

  if (textButton.textContent === 'Показать все') {
    textButton.textContent = 'Скрыть';
    elemSectionUl.classList.add('hidden');
  } else {
    textButton.textContent = 'Показать все';
    elemSectionUl.classList.remove('hidden');
  }
});

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/focus-visible/dist/focus-visible */ "../node_modules/focus-visible/dist/focus-visible.js");
/* harmony import */ var _node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/main.scss */ "./scss/main.scss");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index.html */ "./index.html");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../index */ "./index.js");
/* harmony import */ var _swiper2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../swiper2 */ "./swiper2.js");
/* harmony import */ var _swiper2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_swiper2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../menu */ "./menu.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_menu__WEBPACK_IMPORTED_MODULE_5__);







/***/ }),

/***/ "./menu.js":
/*!*****************!*\
  !*** ./menu.js ***!
  \*****************/
/***/ (() => {

var burger = document.querySelector('.button__burger');
var menu = document.querySelector('.aside-wrapper');
var closeburger = document.querySelector('.aside-header__button');
var closeburger2 = document.querySelector('.aside-wrapper');
var scrol = document.querySelector('body');
burger.addEventListener('click', function () {
  if (menu.classList.contains('aside-wrapper--hidden') == true) {
    menu.classList.remove('aside-wrapper--hidden');
    scrol.classList.add('scrol-stop');
  } else {
    menu.classList.add('aside-wrapper--hidden');
  }
});
closeburger.addEventListener('click', function () {
  if (menu.classList.contains('aside-wrapper--hidden') == true) {
    menu.classList.remove('aside-wrapper--hidden');
  } else {
    menu.classList.add('aside-wrapper--hidden');
    scrol.classList.remove('scrol-stop');
  }
});
closeburger2.addEventListener('click', function (e) {
  var target = e.target;

  if (menu.classList.contains('aside-wrapper--hidden') == false && !target.closest('.aside__body') && !target.closest('.button__burger')) {
    menu.classList.add('aside-wrapper--hidden');
    scrol.classList.remove('scrol-stop');
  }
});

/***/ }),

/***/ "./swiper2.js":
/*!********************!*\
  !*** ./swiper2.js ***!
  \********************/
/***/ (() => {

var clickButton = document.querySelector('.section-swiper2-form__button');
var textButton = document.querySelector('.section-swiper2-form__label');
var elemSectionUl = document.querySelector('.section-swiper2-container-ul');
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

/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "../node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/favicon.ico */ "./assets/favicon.ico"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/burger.png */ "./img/burger.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/divider.png */ "./img/divider.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./img/Group.png */ "./img/Group.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./img/call.png */ "./img/call.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./img/chat.png */ "./img/chat.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./img/profile.png */ "./img/profile.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./img/repair.png */ "./img/repair.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./img/checkstatus.png */ "./img/checkstatus.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./img/highlight.png */ "./img/highlight.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./img/expand.png */ "./img/expand.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ./img/about.png */ "./img/about.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ./img/cat1.png */ "./img/cat1.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ./img/cat1 copy.png */ "./img/cat1 copy.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ./img/cat1 copy 2.png */ "./img/cat1 copy 2.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ./img/cat1 copy 7.png */ "./img/cat1 copy 7.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! ./img/cat1 copy 8.png */ "./img/cat1 copy 8.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(/*! ./img/cat1 copy 9.png */ "./img/cat1 copy 9.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_18___ = new URL(/* asset import */ __webpack_require__(/*! ./img/cat1 copy 10.png */ "./img/cat1 copy 10.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_19___ = new URL(/* asset import */ __webpack_require__(/*! ./img/cat1 copy 3.png */ "./img/cat1 copy 3.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_20___ = new URL(/* asset import */ __webpack_require__(/*! ./img/cat1.1.png */ "./img/cat1.1.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_21___ = new URL(/* asset import */ __webpack_require__(/*! ./img/cat2.png */ "./img/cat2.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_22___ = new URL(/* asset import */ __webpack_require__(/*! ./img/cat3.png */ "./img/cat3.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_23___ = new URL(/* asset import */ __webpack_require__(/*! ./img/cat4.png */ "./img/cat4.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_24___ = new URL(/* asset import */ __webpack_require__(/*! ./img/Group 119.png */ "./img/Group 119.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_25___ = new URL(/* asset import */ __webpack_require__(/*! ./img/Group 10.png */ "./img/Group 10.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_26___ = new URL(/* asset import */ __webpack_require__(/*! ./img/more.png */ "./img/more.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_27___ = new URL(/* asset import */ __webpack_require__(/*! ./img/close.png */ "./img/close.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_28___ = new URL(/* asset import */ __webpack_require__(/*! ./img/Group-.png */ "./img/Group-.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_29___ = new URL(/* asset import */ __webpack_require__(/*! ./img/search-.png */ "./img/search-.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_30___ = new URL(/* asset import */ __webpack_require__(/*! ./img/chat copy-.png */ "./img/chat copy-.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_31___ = new URL(/* asset import */ __webpack_require__(/*! ./img/chat-.png */ "./img/chat-.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_32___ = new URL(/* asset import */ __webpack_require__(/*! ./img/profile-.png */ "./img/profile-.png"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);
var ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);
var ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);
var ___HTML_LOADER_REPLACEMENT_11___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_11___);
var ___HTML_LOADER_REPLACEMENT_12___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_12___);
var ___HTML_LOADER_REPLACEMENT_13___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_13___);
var ___HTML_LOADER_REPLACEMENT_14___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_14___);
var ___HTML_LOADER_REPLACEMENT_15___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_15___);
var ___HTML_LOADER_REPLACEMENT_16___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_16___);
var ___HTML_LOADER_REPLACEMENT_17___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_17___);
var ___HTML_LOADER_REPLACEMENT_18___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_18___);
var ___HTML_LOADER_REPLACEMENT_19___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_19___);
var ___HTML_LOADER_REPLACEMENT_20___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_20___);
var ___HTML_LOADER_REPLACEMENT_21___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_21___);
var ___HTML_LOADER_REPLACEMENT_22___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_22___);
var ___HTML_LOADER_REPLACEMENT_23___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_23___);
var ___HTML_LOADER_REPLACEMENT_24___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_24___);
var ___HTML_LOADER_REPLACEMENT_25___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_25___);
var ___HTML_LOADER_REPLACEMENT_26___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_26___);
var ___HTML_LOADER_REPLACEMENT_27___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_27___);
var ___HTML_LOADER_REPLACEMENT_28___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_28___);
var ___HTML_LOADER_REPLACEMENT_29___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_29___);
var ___HTML_LOADER_REPLACEMENT_30___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_30___);
var ___HTML_LOADER_REPLACEMENT_31___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_31___);
var ___HTML_LOADER_REPLACEMENT_32___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_32___);
var code = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n  <meta charset=\"UTF-8\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n  <link rel=\"shortcut icon\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" type=\"image/x-icon\">\r\n  <title>new site</title>\r\n</head>\r\n<body>\r\n  <div class=\"wrapper-body\">\r\n    <header class=\"header header--hidden1120\">\r\n      <nav class=\"header__nav\">\r\n        <div class=\"nav__container-left\">\r\n          <button class=\"button__burger button\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" width=\"40px\" height=\"40px\" alt=\"burger\"></button>\r\n          <div class=\"hidden--320\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" width=\"2px\" height=\"32px\" alt=\"divider\"></div>\r\n          <a href=\"#\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" width=\"96.548px\" height=\"50.815px\" alt=\"Group\"></a>\r\n        </div>\r\n        <div class=\"nav__container-right\"><a class=\"header__item hidden--320\" href=\"#popup-phone\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" width=\"40px\" height=\"40px\" alt=\"call\"></a>\r\n          <a class=\"header__item hidden--320\" href=\"#popup\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" width=\"40px\" height=\"40px\" alt=\"chat\"></a>\r\n          <a class=\"header__item hidden--320\" href=\"#\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" width=\"40px\" height=\"40px\" alt=\"profile\"></a>\r\n          <a class=\"header__item\" href=\"#\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" width=\"2px\" height=\"32px\" alt=\"divider\"></a>\r\n          <a class=\"header__item\" href=\"#\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" width=\"40px\" height=\"40px\" alt=\"repair\"></a>\r\n          <a class=\"header__item\" href=\"#\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" width=\"40px\" height=\"40px\" alt=\"checkstatus\"></a>\r\n        </div>\r\n      </nav>\r\n    </header>\r\n    <main class=\"main\">\r\n      <div class=\"main__shapka\">\r\n        <div class=\"main__title\">\r\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" width=\"4px\" height=\"40px\" alt=\"highlight\">\r\n          <div>Услуги и сервисы</div>\r\n        </div>\r\n        <div class=\"main__title-icon hidden--320768\">\r\n          <div class=\"title-icon\">\r\n            <div>Оставить заявку</div>\r\n            <a href=\"#\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"repair\" width=\"40px\" height=\"40px\"></a>\r\n          </div>\r\n          <div class=\"title-icon\">\r\n            <div>Статус ремонта</div>\r\n            <a href=\"#\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"checkstatus\" width=\"40px\" height=\"40px\"></a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"main__ul\">\r\n        <a class=\"main__item main__item--activeted main__item--hover\" href=\"#\" alt=\"\">Ремонтируемые устройства</a>\r\n        <a class=\"main__item main__item--hover\" href=\"#\" alt=\"\">Дополнительные услуги</a>\r\n        <a class=\"main__item main__item--hover\" href=\"#\" alt=\"\">Цены на услуги</a>\r\n        <a class=\"main__item main__item--hover\" href=\"#\" alt=\"\">Адреса сервисных центров</a>\r\n        <a class=\"main__item main__item--hover\" href=\"#\" alt=\"\">Специальные цены</a>\r\n        <a class=\"main__item main__item--hover\" href=\"#\" alt=\"\">Отзывы</a>\r\n      </div>\r\n      <div class=\"conteiner-section\">\r\n        <section class=\"main__section\">\r\n          <div>\r\n            Мы являемся авторизованным сервисным центром по ремонту техники Dell. Только у нас вы можете отремонтировать свой ноутбук Dell с официальной гарантией производителя.<br>\r\n          </div>\r\n          <div class=\"hidden--3201120\"><br>Мы успешно работаем с 1992 года и заслужили репутацию надежного партнера</div>\r\n          <div class=\"hidden--320768\"><br>Мы успешно работаем с 1992 года и заслужили репутацию надежного партнера, что подтверждает большое количество постоянных клиентов. Мы гордимся тем, что к нам обращаются по рекомендациям и, в свою очередь, советуют нас родным и близким.</div>\r\n          <div class=\"main__section-continue\">\r\n            <a href=\"#\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"expand\"></a>\r\n            <div>Читать далее</div>\r\n          </div>\r\n        </section>\r\n        <img class=\"main-section__logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" alt=\"Логотип\">\r\n      </div>\r\n    </main>\r\n    <!--menu-->\r\n    <!--swiper-->\r\n      <section class=\"section\">\r\n        <div class=\"section-title\">Ремонт техники различных брендов</div>\r\n        <div class=\"section-container-swiper\">\r\n          <div class=\"swiper\">\r\n            <!-- Additional required wrapper -->\r\n            <div class=\"swiper-wrapper\">\r\n              <!-- Slides -->\r\n              <div class=\"swiper-slide\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"lenovo\" width=\"240px\" height=\"72px\">\r\n              </div>\r\n              <div class=\"swiper-slide\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"samsung\" width=\"240px\" height=\"72px\">\r\n              </div>\r\n              <div class=\"swiper-slide\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"apple\" width=\"240px\" height=\"72px\">\r\n              </div>\r\n              <div class=\"swiper-slide\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"sonic\" width=\"240px\" height=\"72px\">\r\n              </div>\r\n              <div class=\"swiper-slide\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_16___ + "\" alt=\"hp\" width=\"240px\" height=\"72px\">\r\n              </div>\r\n              <div class=\"swiper-slide\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_17___ + "\" alt=\"acer\" width=\"240px\" height=\"72px\">\r\n              </div>\r\n              <div class=\"swiper-slide\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_18___ + "\" alt=\"sony\" width=\"240px\" height=\"72px\">\r\n              </div>\r\n              <div class=\"swiper-slide\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"lenovo\" width=\"240px\" height=\"72px\">\r\n              </div>\r\n              <div class=\"swiper-slide\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"lenovo\" width=\"240px\" height=\"72px\">\r\n              </div>\r\n              <div class=\"swiper-slide\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"lenovo\" width=\"240px\" height=\"72px\">\r\n              </div>\r\n              <div class=\"swiper-slide\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"lenovo\" width=\"240px\" height=\"72px\">\r\n              </div>\r\n            </div>\r\n            <div class=\"swiper-pagination\"></div>\r\n          </div>\r\n        </div>\r\n        <ul class=\"section-container-ul section-container--hidden\">\r\n          <li><img src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"lenovo\" width=\"240px\" height=\"72px\"></li>\r\n          <li><img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"samsung\" width=\"240px\" height=\"72px\"></li>\r\n          <li><img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"apple\" width=\"240px\" height=\"72px\"></li>\r\n          <li><img src=\"" + ___HTML_LOADER_REPLACEMENT_19___ + "\" alt=\"sonic\" width=\"240px\" height=\"72px\"></li>\r\n          <li><img src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"bosh\" width=\"240px\" height=\"72px\"></li>\r\n          <li><img src=\"" + ___HTML_LOADER_REPLACEMENT_16___ + "\" alt=\"hp\" width=\"240px\" height=\"72px\"></li>\r\n          <li><img src=\"" + ___HTML_LOADER_REPLACEMENT_17___ + "\" alt=\"acer\" width=\"240px\" height=\"72px\"></li>\r\n          <li><img src=\"" + ___HTML_LOADER_REPLACEMENT_18___ + "\" alt=\"sony\" width=\"240px\" height=\"72px\"></li>\r\n          <li><img src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"lenovo\" width=\"240px\" height=\"72px\"></li>\r\n          <li><img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"samsung\" width=\"240px\" height=\"72px\"></li>\r\n          <li><img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"apple\" width=\"240px\" height=\"72px\"></li>\r\n        </ul>  \r\n        <form class=\"section-form\">  \r\n          <button class=\"section-form__button \">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" width=\"24px\" height=\"24px\"  alt=\"expand\">\r\n            <p class=\"section-form__label\">Показать все</p>\r\n          </button>\r\n        </form>\r\n      </section>\r\n    <!--swiper2-->\r\n      <section class=\"section-swiper2\">\r\n        <div class=\"section-swiper2-title\">Ремонт различных видов техники</div>\r\n        <div class=\"section-swiper2-container-swiper\">\r\n          <div class=\"swiper swiper2\">\r\n            <div class=\"swiper-wrapper swiper2\">\r\n              <div class=\"swiper-slide swiper2\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_20___ + "\" alt=\"remont\" width=\"240px\" height=\"160px\">\r\n              </div>\r\n              <div class=\"swiper-slide swiper2\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_21___ + "\" alt=\"remont\" width=\"240px\" height=\"160px\">\r\n              </div>\r\n              <div class=\"swiper-slide swiper2\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_22___ + "\" alt=\"remont\" width=\"240px\" height=\"160px\">\r\n              </div>\r\n              <div class=\"swiper-slide swiper2\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_23___ + "\" alt=\"remont\" width=\"240px\" height=\"160px\">\r\n              </div>\r\n              <div class=\"swiper-slide swiper2\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_20___ + "\" alt=\"remont\" width=\"240px\" height=\"160px\">\r\n              </div>\r\n              <div class=\"swiper-slide swiper2\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_21___ + "\" alt=\"remont\" width=\"240px\" height=\"160px\">\r\n              </div>\r\n              <div class=\"swiper-slide swiper2\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_22___ + "\" alt=\"remont\" width=\"240px\" height=\"160px\">\r\n              </div>\r\n              <div class=\"swiper-slide swiper2\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_23___ + "\" alt=\"remont\" width=\"240px\" height=\"160px\">\r\n              </div>\r\n            </div>\r\n            <div class=\"swiper-pagination swiper2\"></div>\r\n          </div>\r\n        </div>\r\n        <ul class=\"section-swiper2-container-ul section-swiper2-container--hidden\">\r\n          <li><img src=\"" + ___HTML_LOADER_REPLACEMENT_20___ + "\" alt=\"remont\" width=\"240px\" height=\"160px\"></li>\r\n          <li><img src=\"" + ___HTML_LOADER_REPLACEMENT_21___ + "\" alt=\"remont\" width=\"240px\" height=\"160px\"></li>\r\n          <li><img src=\"" + ___HTML_LOADER_REPLACEMENT_22___ + "\" alt=\"remont\" width=\"240px\" height=\"160px\"></li>\r\n          <li><img src=\"" + ___HTML_LOADER_REPLACEMENT_23___ + "\" alt=\"remont\" width=\"240px\" height=\"160px\"></li>\r\n          <li><img src=\"" + ___HTML_LOADER_REPLACEMENT_20___ + "\" alt=\"remont\" width=\"240px\" height=\"160px\"></li>\r\n          <li><img src=\"" + ___HTML_LOADER_REPLACEMENT_21___ + "\" alt=\"remont\" width=\"240px\" height=\"160px\"></li>\r\n          <li><img src=\"" + ___HTML_LOADER_REPLACEMENT_22___ + "\" alt=\"remont\" width=\"240px\" height=\"160px\"></li>\r\n          <li><img src=\"" + ___HTML_LOADER_REPLACEMENT_23___ + "\" alt=\"remont\" width=\"240px\" height=\"160px\"></li>\r\n        </ul>  \r\n        <form class=\"section-swiper2-form\">  \r\n          <button class=\"section-swiper2-form__button \">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" width=\"24px\" height=\"24px\"  alt=\"expand\">\r\n            <p class=\"section-swiper2-form__label\">Показать все</p>\r\n          </button>\r\n        </form>\r\n      </section>\r\n    <!--swiper3-->\r\n    <section class=\"section-swiper3\">\r\n      <div class=\"section-swiper3-title\">цены на услуги</div>\r\n      <div class=\"section-swiper3-container-swiper\">\r\n        <div class=\"swiper swiper3\">\r\n          <div class=\"swiper-wrapper swiper3\">\r\n            <div class=\"swiper-slide swiper3\">\r\n              <div class=\"swiper3-slide__content\">\r\n                <div class=\"swiper-slide__container\">\r\n                  <div class=\"swiper-slide__container--color-text\">Ремонтные услуги</div>\r\n                  <div>Тестирование с выдачей технического заключения</div>\r\n                </div>\r\n                <div class=\"swiper-slide__container\">\r\n                  <div class=\"swiper-slide__container--color-text\">Цена</div>\r\n                  <div>Бесплатно</div>\r\n                </div>\r\n                <div class=\"swiper-slide__container-button\">\r\n                  <div class=\"swiper-slide__container\">\r\n                    <div class=\"swiper-slide__container--color-text\">Срок</div>\r\n                    <div>30-120 мин</div>\r\n                  </div>\r\n                  <img class=\"swiper-slide__container-button--radius\" src=\"" + ___HTML_LOADER_REPLACEMENT_24___ + "\" alt=\"button\" width=\"119px\" height=\"32px\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"swiper-slide swiper3\">\r\n              <div class=\"swiper3-slide__content\">\r\n                <div class=\"swiper-slide__container\">\r\n                  <div class=\"swiper-slide__container--color-text\">Ремонтные услуги</div>\r\n                  <div>Диагностика</div>\r\n                </div>\r\n                <div class=\"swiper-slide__container\">\r\n                  <div class=\"swiper-slide__container--color-text\">Цена</div>\r\n                  <div>Бесплатно</div>\r\n                </div>\r\n                <div class=\"swiper-slide__container-button\">\r\n                  <div class=\"swiper-slide__container\">\r\n                    <div class=\"swiper-slide__container--color-text\">Срок</div>\r\n                    <div>30 мин</div>\r\n                  </div>\r\n                  <img class=\"swiper-slide__container-button--radius\" src=\"" + ___HTML_LOADER_REPLACEMENT_24___ + "\" alt=\"button\" width=\"119px\" height=\"32px\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"swiper-slide swiper3\">\r\n              <div class=\"swiper3-slide__content\">\r\n                <div class=\"swiper-slide__container\">\r\n                  <div class=\"swiper-slide__container--color-text\">Ремонтные услуги</div>\r\n                  <div>Замена полифонического динамика</div>\r\n                </div>\r\n                <div class=\"swiper-slide__container\">\r\n                  <div class=\"swiper-slide__container--color-text\">Цена</div>\r\n                  <div>1 000 ₽</div>\r\n                </div>\r\n                <div class=\"swiper-slide__container-button\">\r\n                  <div class=\"swiper-slide__container\">\r\n                    <div class=\"swiper-slide__container--color-text\">Срок</div>\r\n                    <div>30-120 мин</div>\r\n                  </div>\r\n                  <img class=\"swiper-slide__container-button--radius\" src=\"" + ___HTML_LOADER_REPLACEMENT_24___ + "\" alt=\"button\" width=\"119px\" height=\"32px\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"swiper-slide swiper3\">\r\n              <div class=\"swiper3-slide__content\">\r\n                <div class=\"swiper-slide__container\">\r\n                  <div class=\"swiper-slide__container--color-text\">Ремонтные услуги</div>\r\n                  <div>Тестирование с выдачей технического заключения</div>\r\n                </div>\r\n                <div class=\"swiper-slide__container\">\r\n                  <div class=\"swiper-slide__container--color-text\">Цена</div>\r\n                  <div>1 000 ₽</div>\r\n                </div>\r\n                <div class=\"swiper-slide__container-button\">\r\n                  <div class=\"swiper-slide__container\">\r\n                    <div class=\"swiper-slide__container--color-text\">Срок</div>\r\n                    <div>30-120 мин</div>\r\n                  </div>\r\n                  <img class=\"swiper-slide__container-button--radius\" src=\"" + ___HTML_LOADER_REPLACEMENT_24___ + "\" alt=\"button\" width=\"119px\" height=\"32px\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"swiper-slide swiper3\">\r\n              <div class=\"swiper3-slide__content\">\r\n                <div class=\"swiper-slide__container\">\r\n                  <div class=\"swiper-slide__container--color-text\">Ремонтные услуги</div>\r\n                  <div>Тестирование с выдачей технического заключения</div>\r\n                </div>\r\n                <div class=\"swiper-slide__container\">\r\n                  <div class=\"swiper-slide__container--color-text\">Цена</div>\r\n                  <div>Бесплатно</div>\r\n                </div>\r\n                <div class=\"swiper-slide__container-button\">\r\n                  <div class=\"swiper-slide__container\">\r\n                    <div class=\"swiper-slide__container--color-text\">Срок</div>\r\n                    <div>30-120 мин</div>\r\n                  </div>\r\n                  <img class=\"swiper-slide__container-button--radius\" src=\"" + ___HTML_LOADER_REPLACEMENT_24___ + "\" alt=\"button\" width=\"119px\" height=\"32px\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"swiper-pagination\"></div>\r\n        </div>\r\n      </div>\r\n      <div class=\"section-swiper3-container-ul--visible\">\r\n        <div class=\"section-swiper3-container-ul__header\">\r\n          <div class=\"section-swiper3-container-ul__header-item\">Ремонтные услуги</div>\r\n          <div>Цена</div>\r\n          <div>Срок</div>\r\n        </div>\r\n        <div class=\"section-swiper3-container-ul__border\">\r\n          <ul class=\"section-swiper3-container-ul section-swiper3-container--hidden\">\r\n            <li class=\"section-swiper3-container-ul__item\">\r\n              <div class=\"section-swiper3-container-ul__item-left\">Диагностика</div>\r\n              <div class=\"section-swiper3-container-ul__item-middle\">Бесплатно</div>\r\n              <div class=\"section-swiper3-container-ul__item-right\">30 мин</div>\r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_25___ + "\" alt=\"button\" width=\"119px\" height=\"32px\">\r\n            </li>\r\n            <li class=\"section-swiper3-container-ul__item\">\r\n              <div class=\"section-swiper3-container-ul__item-left\">Замена дисплея</div>\r\n              <div class=\"section-swiper3-container-ul__item-middle\">1 000 ₽</div>\r\n              <div class=\"section-swiper3-container-ul__item-right\">30-120 мин</div>\r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_25___ + "\" alt=\"button\" width=\"119px\" height=\"32px\">\r\n            </li>\r\n            <li class=\"section-swiper3-container-ul__item\">\r\n              <div class=\"section-swiper3-container-ul__item-left\">Замена полифонического динамика</div>\r\n              <div class=\"section-swiper3-container-ul__item-middle\">1 000 ₽</div>\r\n              <div class=\"section-swiper3-container-ul__item-right\">30-120 мин</div>\r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_25___ + "\" alt=\"button\" width=\"119px\" height=\"32px\">\r\n            </li>\r\n            <li class=\"section-swiper3-container-ul__item\">\r\n              <div class=\"section-swiper3-container-ul__item-left\">Тестирование с выдачей технического заключения</div>\r\n              <div class=\"section-swiper3-container-ul__item-middle\">1 000 ₽</div>\r\n              <div class=\"section-swiper3-container-ul__item-right\">30-120 мин</div>\r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_25___ + "\" alt=\"button\" width=\"119px\" height=\"32px\">\r\n            </li>\r\n            <li class=\"section-swiper3-container-ul__item\">\r\n              <div class=\"section-swiper3-container-ul__item-left\">Замена программного обеспечения</div>\r\n              <div class=\"section-swiper3-container-ul__item-middle\">1 000 ₽</div>\r\n              <div class=\"section-swiper3-container-ul__item-right\">30-120 мин</div>\r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_25___ + "\" alt=\"button\" width=\"119px\" height=\"32px\">\r\n            </li>\r\n          </ul>\r\n        </div> \r\n      </div> \r\n    </section>\r\n    <div class=\"section__footer\">\r\n      Все цены указаны с учетом НДС. Стоимость ремонта указана на единичную услугу. Для получения коммерческого предложения на постоянное обслуживание, оставьте заявку.\r\n    </div>\r\n    <a href=\"#\" class=\"section__footer__button\">\r\n      <p>Получить коммерческое предложение</p>\r\n      <img src=\"" + ___HTML_LOADER_REPLACEMENT_26___ + "\" alt=\"button\" width=\"24px\" height=\"24px\">\r\n    </a>\r\n    <footer class=\"footer\">\r\n      <div class=\"footer__item\"><span class=\"footer__item--margin\">© 2019 CPS</span><br> Разработано командой Apesong</div>\r\n      <div class=\"footer__item\">Политика конфиденциальности</div>\r\n      <div class=\"footer__item\">Информация, размещенная на данной странице, не является публичной офертой</div>\r\n    </footer>\r\n  </div>\r\n  <aside class=\"aside-wrapper aside-wrapper--hidden\">\r\n    <div class=\"aside__body\">\r\n      <header class=\"aside-header\">\r\n        <div class=\"aside-header__container-left\">\r\n          <button class=\"aside-header__button hover aside-header__button-hidden\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_27___ + "\"  alt=\"close\"></button>\r\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_28___ + "\" width=\"97px\" height=\"51px\" alt=\"Group\">\r\n        </div>\r\n        <div class=\"aside-header__container-right\">\r\n          <button class=\"aside-header__button hover\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_29___ + "\" width=\"40px\" height=\"40px\" alt=\"search\"></button>  \r\n        </div>\r\n      </header>\r\n      <nav>\r\n        <ul class=\"aside-nav__ul\">\r\n          <li><a class=\"aside-nav__ul__item aside-nav__ul__item--active ul--hover\" href=\"#\" alt=\"\">Ремонт техники</a>\r\n          <li><a class=\"aside-nav__ul__item ul--hover\" href=\"#\" alt=\"\">Услуги и сервисы</a>\r\n          <li><a class=\"aside-nav__ul__item ul--hover\" href=\"#\" alt=\"\">Корпоративным клиентам</a>\r\n          <li><a class=\"aside-nav__ul__item ul--hover\" href=\"#\" alt=\"\">Продавцам техники</a>\r\n          <li><a class=\"aside-nav__ul__item ul--hover\" href=\"#\" alt=\"\">Продавцам техники</a>\r\n          <li><a class=\"aside-nav__ul__item ul--hover\" href=\"#\" alt=\"\">Партнерам</a>\r\n          <li><a class=\"aside-nav__ul__item ul--hover\" href=\"#\" alt=\"\">Производителям</a>\r\n          <li><a class=\"aside-nav__ul__item ul--hover\" href=\"#\" alt=\"\">Наши сервисные центры</a>\r\n          <li><a class=\"aside-nav__ul__item ul--hover\" href=\"#\" alt=\"\">Контакты</a>\r\n        </ul>\r\n      </nav>\r\n      <footer class=\"aside-footer\">\r\n        <div class=\"aside-footer__nav\">\r\n          <button class=\"aside-footer__button hover\"><a href=\"#popup-phone\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_30___ + "\" width=\"40px\" height=\"40px\" alt=\"phone\"></a></button>\r\n          <button class=\"aside-footer__button hover\"><a href=\"#popup\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_31___ + "\" width=\"40px\" height=\"40px\" alt=\"chat\"></a></button>\r\n          <button class=\"aside-footer__button hover\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_32___ + "\" width=\"40px\" height=\"40px\" alt=\"profile\"></button>\r\n        </div>\r\n        <div class=\"aside-footer__mail\">mail@cps.com</div>\r\n        <div class=\"aside-footer__number\">8 800 890 8900</div>\r\n        <div class=\"aside-footer__lang\">\r\n          <button class=\"aside-footer__lang-button aside-footer__lang--active hover\">RU</button>\r\n          <button class=\"aside-footer__lang-button hover\">EN</button>\r\n          <button class=\"aside-footer__lang-button hover\">CH</button>\r\n        </div>\r\n      </footer>\r\n    </div>\r\n  </aside>\r\n  <div id=\"popup\" class=\"popup\">\r\n    <div class=\"popup-content\">\r\n      <button class=\"popup__close popup-button-style\"><a href=\"#\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_27___ + "\" width=\"40px\" height=\"40px\" alt=\"close\"></a></button>\r\n      <div class=\"popup-position__content\">\r\n        <form class=\"popup__form\">\r\n          <div class=\"popup-title\">Обратная связь</div>\r\n          <div class=\"popup__form-container\">\r\n            <input type=\"text\" class=\"popup__form-container__item\" placeholder=\"Имя\"> \r\n            <input type=\"text\" class=\"popup__form-container__item\" placeholder=\"Телефон\"> \r\n            <input type=\"text\" class=\"popup__form-container__item\" placeholder=\"Электронная почта\"> \r\n          </div> \r\n          <div>\r\n            <textarea rows=\"5\" placeholder=\"Сообщение\" class=\"popup__form__text-area\"></textarea>\r\n          </div>\r\n          <div class=\"popup__text\">\r\n            Нажимая “отправить”, вы даете согласие на <span class=\"popup__text-span\">обработку персональных данных</span> и соглашаетесь с нашей <span class=\"popup__text-span\">политикой конфиденциальности</span>\r\n          </div>\r\n          <button class=\"popup-button-style popup-button\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_25___ + "\" width=\"136px\" height=\"32px\" alt=\"Group\"></button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div id=\"popup-phone\" class=\"popup-phone\">\r\n    <div class=\"popup-phone-content\">\r\n      <button class=\"popup-phone__close popup-phone-button-style\"><a href=\"#\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_27___ + "\" width=\"40px\" height=\"40px\" alt=\"close\"></a></button>\r\n      <div class=\"popup-phone-position__content\">\r\n        <form class=\"popup-phone__form\">\r\n          <div class=\"popup-phone-title\">Заказать звонок</div>\r\n          <div class=\"popup-phone__form-container\"> \r\n            <input type=\"text\" class=\"popup-phone__form-container__item\" placeholder=\"Телефон\">  \r\n          </div> \r\n          <div class=\"popup-phone__text\">\r\n            Нажимая “отправить”, вы даете согласие на <span class=\"popup-phone__text-span\">обработку персональных данных</span> и соглашаетесь с нашей <span class=\"popup-phone__text-span\">политикой конфиденциальности</span>\r\n          </div>\r\n          <button class=\"popup-phone-button-style popup-phone-button\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_25___ + "\" width=\"136px\" height=\"32px\" alt=\"Group\"></button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</body>\r\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./scss/main.scss":
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/favicon.ico":
/*!****************************!*\
  !*** ./assets/favicon.ico ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/favicon.ico";

/***/ }),

/***/ "./img/Group 10.png":
/*!**************************!*\
  !*** ./img/Group 10.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/Group 10.png";

/***/ }),

/***/ "./img/Group 119.png":
/*!***************************!*\
  !*** ./img/Group 119.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/Group 119.png";

/***/ }),

/***/ "./img/Group-.png":
/*!************************!*\
  !*** ./img/Group-.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/Group-.png";

/***/ }),

/***/ "./img/Group.png":
/*!***********************!*\
  !*** ./img/Group.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/Group.png";

/***/ }),

/***/ "./img/about.png":
/*!***********************!*\
  !*** ./img/about.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/about.png";

/***/ }),

/***/ "./img/burger.png":
/*!************************!*\
  !*** ./img/burger.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/burger.png";

/***/ }),

/***/ "./img/call.png":
/*!**********************!*\
  !*** ./img/call.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/call.png";

/***/ }),

/***/ "./img/cat1 copy 10.png":
/*!******************************!*\
  !*** ./img/cat1 copy 10.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/cat1 copy 10.png";

/***/ }),

/***/ "./img/cat1 copy 2.png":
/*!*****************************!*\
  !*** ./img/cat1 copy 2.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/cat1 copy 2.png";

/***/ }),

/***/ "./img/cat1 copy 3.png":
/*!*****************************!*\
  !*** ./img/cat1 copy 3.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/cat1 copy 3.png";

/***/ }),

/***/ "./img/cat1 copy 7.png":
/*!*****************************!*\
  !*** ./img/cat1 copy 7.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/cat1 copy 7.png";

/***/ }),

/***/ "./img/cat1 copy 8.png":
/*!*****************************!*\
  !*** ./img/cat1 copy 8.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/cat1 copy 8.png";

/***/ }),

/***/ "./img/cat1 copy 9.png":
/*!*****************************!*\
  !*** ./img/cat1 copy 9.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/cat1 copy 9.png";

/***/ }),

/***/ "./img/cat1 copy.png":
/*!***************************!*\
  !*** ./img/cat1 copy.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/cat1 copy.png";

/***/ }),

/***/ "./img/cat1.1.png":
/*!************************!*\
  !*** ./img/cat1.1.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/cat1.1.png";

/***/ }),

/***/ "./img/cat1.png":
/*!**********************!*\
  !*** ./img/cat1.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/cat1.png";

/***/ }),

/***/ "./img/cat2.png":
/*!**********************!*\
  !*** ./img/cat2.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/cat2.png";

/***/ }),

/***/ "./img/cat3.png":
/*!**********************!*\
  !*** ./img/cat3.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/cat3.png";

/***/ }),

/***/ "./img/cat4.png":
/*!**********************!*\
  !*** ./img/cat4.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/cat4.png";

/***/ }),

/***/ "./img/chat copy-.png":
/*!****************************!*\
  !*** ./img/chat copy-.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/chat copy-.png";

/***/ }),

/***/ "./img/chat-.png":
/*!***********************!*\
  !*** ./img/chat-.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/chat-.png";

/***/ }),

/***/ "./img/chat.png":
/*!**********************!*\
  !*** ./img/chat.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/chat.png";

/***/ }),

/***/ "./img/checkstatus.png":
/*!*****************************!*\
  !*** ./img/checkstatus.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/checkstatus.png";

/***/ }),

/***/ "./img/close.png":
/*!***********************!*\
  !*** ./img/close.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/close.png";

/***/ }),

/***/ "./img/divider.png":
/*!*************************!*\
  !*** ./img/divider.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/divider.png";

/***/ }),

/***/ "./img/expand.png":
/*!************************!*\
  !*** ./img/expand.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/expand.png";

/***/ }),

/***/ "./img/highlight.png":
/*!***************************!*\
  !*** ./img/highlight.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/highlight.png";

/***/ }),

/***/ "./img/more.png":
/*!**********************!*\
  !*** ./img/more.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/more.png";

/***/ }),

/***/ "./img/profile-.png":
/*!**************************!*\
  !*** ./img/profile-.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/profile-.png";

/***/ }),

/***/ "./img/profile.png":
/*!*************************!*\
  !*** ./img/profile.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/profile.png";

/***/ }),

/***/ "./img/repair.png":
/*!************************!*\
  !*** ./img/repair.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/repair.png";

/***/ }),

/***/ "./img/search-.png":
/*!*************************!*\
  !*** ./img/search-.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/search-.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_focus-visible_dist_focus-visible_js-node_modules_html-loader_dist_runtim-760283"], () => (__webpack_require__("./js/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map