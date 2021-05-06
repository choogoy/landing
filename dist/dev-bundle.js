/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_countTimer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/countTimer */ \"./src/modules/countTimer.js\");\n/* harmony import */ var _modules_changeData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/changeData */ \"./src/modules/changeData.js\");\n/* harmony import */ var _modules_toggleMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/toggleMenu */ \"./src/modules/toggleMenu.js\");\n/* harmony import */ var _modules_togglePopup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/togglePopup */ \"./src/modules/togglePopup.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tabs */ \"./src/modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_changeTeamImages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/changeTeamImages */ \"./src/modules/changeTeamImages.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/calc */ \"./src/modules/calc.js\");\n/* harmony import */ var _modules_validForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/validForm */ \"./src/modules/validForm.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/sendForm */ \"./src/modules/sendForm.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n(0,_modules_countTimer__WEBPACK_IMPORTED_MODULE_0__.default)((0,_modules_changeData__WEBPACK_IMPORTED_MODULE_1__.default)());\nsetInterval(_modules_countTimer__WEBPACK_IMPORTED_MODULE_0__.default, 1000, (0,_modules_changeData__WEBPACK_IMPORTED_MODULE_1__.default)()); // Timer\n\n(0,_modules_toggleMenu__WEBPACK_IMPORTED_MODULE_2__.default)(); // Menu\n\n(0,_modules_togglePopup__WEBPACK_IMPORTED_MODULE_3__.default)(); // Popup\n\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_4__.default)(); // Tabs\n\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_5__.default)(); // Slider\n\n(0,_modules_changeTeamImages__WEBPACK_IMPORTED_MODULE_6__.default)(); // Our team\n\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_7__.default)(100); // Calculator\n\n(0,_modules_validForm__WEBPACK_IMPORTED_MODULE_8__.default)(); // Footer form validator\n\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_9__.default)(); // Send-AJAX-form\n\n//# sourceURL=webpack://3dglo/./src/index.js?");

/***/ }),

/***/ "./src/modules/addZero.js":
/*!********************************!*\
  !*** ./src/modules/addZero.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// функция добавляет \"0\" если число меньше 10\nvar addZero = function addZero(num) {\n  if (num < 10) {\n    return '0' + num;\n  } else {\n    return num;\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addZero);\n\n//# sourceURL=webpack://3dglo/./src/modules/addZero.js?");

/***/ }),

/***/ "./src/modules/animate.js":
/*!********************************!*\
  !*** ./src/modules/animate.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar animate = function animate(_ref) {\n  var timing = _ref.timing,\n      draw = _ref.draw,\n      duration = _ref.duration;\n  var start = performance.now();\n  requestAnimationFrame(function animate(time) {\n    // timeFraction изменяется от 0 до 1\n    var timeFraction = (time - start) / duration;\n\n    if (timeFraction > 1) {\n      timeFraction = 1;\n    } // вычисление текущего состояния анимации\n\n\n    var progress = timing(timeFraction);\n    draw(progress); // отрисовать её\n\n    if (timeFraction < 1) {\n      requestAnimationFrame(animate);\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (animate);\n\n//# sourceURL=webpack://3dglo/./src/modules/animate.js?");

/***/ }),

/***/ "./src/modules/calc.js":
/*!*****************************!*\
  !*** ./src/modules/calc.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _animate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animate */ \"./src/modules/animate.js\");\n\n\nvar calc = function calc() {\n  var price = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;\n  var calcBlock = document.querySelector('.calc-block');\n  var calcType = document.querySelector('.calc-type');\n  var calcSquare = document.querySelector('.calc-square');\n  var calcCount = document.querySelector('.calc-count');\n  var calcDay = document.querySelector('.calc-day');\n  var totalValue = document.getElementById('total');\n\n  var countSum = function countSum() {\n    var total = 0;\n    var countValue = 1;\n    var dayValue = 1;\n    var squareValue = +calcSquare.value;\n    var typeValue = parseFloat(calcType.options[calcType.selectedIndex].value);\n\n    if (calcCount.value > 1) {\n      countValue += (calcCount.value - 1) / 10;\n    }\n\n    if (calcDay.value && calcDay.value < 5) {\n      dayValue *= 2;\n    } else if (calcDay.value && calcDay.value < 10) {\n      dayValue *= 1.5;\n    }\n\n    if (typeValue && squareValue) {\n      total = price * typeValue * squareValue * countValue * dayValue;\n    }\n\n    (0,_animate__WEBPACK_IMPORTED_MODULE_0__.default)({\n      duration: 300,\n      timing: function timing(timeFraction) {\n        return timeFraction;\n      },\n      draw: function draw(progress) {\n        totalValue.textContent = Math.round(total * progress);\n      }\n    });\n  };\n\n  calcBlock.addEventListener('change', function (event) {\n    var target = event.target;\n\n    if (target.matches('select') || target.matches('input')) {\n      countSum();\n    }\n  });\n\n  var validCalc = function validCalc() {\n    calcBlock.addEventListener('input', function (event) {\n      var input = event.target.closest('input');\n\n      if (input) {\n        input.value = input.value.replace(/\\D/gi, '').replace(/^0/gi, ''); // только цифры и первая не ноль \n      }\n    });\n  };\n\n  validCalc();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack://3dglo/./src/modules/calc.js?");

/***/ }),

/***/ "./src/modules/changeData.js":
/*!***********************************!*\
  !*** ./src/modules/changeData.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar changeDate = function changeDate() {\n  var date = new Date();\n  new Date(date.setDate(date.getDate() + 1));\n  new Date(date.setHours(0, 0, 0));\n  return new Date(date.setDate(date.getDate()));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (changeDate);\n\n//# sourceURL=webpack://3dglo/./src/modules/changeData.js?");

/***/ }),

/***/ "./src/modules/changeTeamImages.js":
/*!*****************************************!*\
  !*** ./src/modules/changeTeamImages.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar changeTeamImages = function changeTeamImages() {\n  var command = document.getElementById('command');\n\n  var changeImage = function changeImage(event) {\n    var target = event.target;\n    var image = target.closest('.command__photo');\n\n    if (image) {\n      var newSrc = image.dataset.img;\n      image.dataset.img = image.src;\n      image.src = newSrc;\n    }\n  };\n\n  command.addEventListener('mouseover', changeImage);\n  command.addEventListener('mouseout', changeImage);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (changeTeamImages);\n\n//# sourceURL=webpack://3dglo/./src/modules/changeTeamImages.js?");

/***/ }),

/***/ "./src/modules/countTimer.js":
/*!***********************************!*\
  !*** ./src/modules/countTimer.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _addZero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addZero */ \"./src/modules/addZero.js\");\n\n\nvar countTimer = function countTimer(deadline) {\n  var timerHours = document.getElementById('timer-hours'),\n      timerMinutes = document.getElementById('timer-minutes'),\n      timerSeconds = document.getElementById('timer-seconds');\n\n  var getTimeRemaining = function getTimeRemaining() {\n    var dateStop = new Date(deadline).getTime(),\n        dateNow = new Date().getTime(),\n        timeRemaining = (dateStop - dateNow) / 1000,\n        seconds = Math.floor(timeRemaining) % 60,\n        minutes = Math.floor(timeRemaining / 60) % 60,\n        hours = Math.floor(timeRemaining / 60 / 60);\n    return {\n      timeRemaining: timeRemaining,\n      hours: hours,\n      minutes: minutes,\n      seconds: seconds\n    };\n  };\n\n  var updateClock = function updateClock() {\n    var timer = getTimeRemaining();\n\n    if (timer.timeRemaining > 0) {\n      timerHours.textContent = (0,_addZero__WEBPACK_IMPORTED_MODULE_0__.default)(timer.hours);\n      timerMinutes.textContent = (0,_addZero__WEBPACK_IMPORTED_MODULE_0__.default)(timer.minutes);\n      timerSeconds.textContent = (0,_addZero__WEBPACK_IMPORTED_MODULE_0__.default)(timer.seconds);\n    } else {\n      timerHours.textContent = '00';\n      timerMinutes.textContent = '00';\n      timerSeconds.textContent = '00';\n    }\n  };\n\n  updateClock();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countTimer);\n\n//# sourceURL=webpack://3dglo/./src/modules/countTimer.js?");

/***/ }),

/***/ "./src/modules/loadSpinner.js":
/*!************************************!*\
  !*** ./src/modules/loadSpinner.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar loadSpinner = function loadSpinner() {\n  var spinner = document.createElement('section');\n  var spinnerStyle = document.createElement('style');\n  spinner.insertAdjacentHTML('afterbegin', \"  \\n      <div class='sk-fading-circle'>\\n          <div class='sk-circle sk-circle-1'></div>\\n          <div class='sk-circle sk-circle-2'></div>\\n          <div class='sk-circle sk-circle-3'></div>\\n          <div class='sk-circle sk-circle-4'></div>\\n          <div class='sk-circle sk-circle-5'></div>\\n          <div class='sk-circle sk-circle-6'></div>\\n          <div class='sk-circle sk-circle-7'></div>\\n          <div class='sk-circle sk-circle-8'></div>\\n          <div class='sk-circle sk-circle-9'></div>\\n          <div class='sk-circle sk-circle-10'></div>\\n          <div class='sk-circle sk-circle-11'></div>\\n          <div class='sk-circle sk-circle-12'></div>\\n      </div>\");\n  spinnerStyle.insertAdjacentHTML('afterbegin', \"\\n      .sk-fading-circle {\\n          width: 4em;\\n          height: 4em;\\n          position: relative;\\n          margin: 10px auto;\\n      }\\n      .sk-fading-circle .sk-circle {\\n          width: 100%;\\n          height: 100%;\\n          position: absolute;\\n          left: 0;\\n          top: 0;\\n      }\\n      .sk-fading-circle .sk-circle:before {\\n          content: \\\"\\\";\\n          display: block;\\n          margin: 0 auto;\\n          width: 15%;\\n          height: 15%;\\n          background-color: #337ab7;\\n          border-radius: 100%;\\n          -webkit-animation: sk-fading-circle-delay 1.2s infinite ease-in-out both;\\n                  animation: sk-fading-circle-delay 1.2s infinite ease-in-out both;\\n      }\\n      .sk-fading-circle .sk-circle-2 {\\n          transform: rotate(30deg);\\n      }\\n      .sk-fading-circle .sk-circle-3 {\\n          transform: rotate(60deg);\\n      }\\n      .sk-fading-circle .sk-circle-4 {\\n          transform: rotate(90deg);\\n      }\\n      .sk-fading-circle .sk-circle-5 {\\n          transform: rotate(120deg);\\n      }\\n      .sk-fading-circle .sk-circle-6 {\\n          transform: rotate(150deg);\\n      }\\n      .sk-fading-circle .sk-circle-7 {\\n          transform: rotate(180deg);\\n      }\\n      .sk-fading-circle .sk-circle-8 {\\n          transform: rotate(210deg);\\n      }\\n      .sk-fading-circle .sk-circle-9 {\\n          transform: rotate(240deg);\\n      }\\n      .sk-fading-circle .sk-circle-10 {\\n          transform: rotate(270deg);\\n      }\\n      .sk-fading-circle .sk-circle-11 {\\n          transform: rotate(300deg);\\n      }\\n      .sk-fading-circle .sk-circle-12 {\\n          transform: rotate(330deg);\\n      }\\n      .sk-fading-circle .sk-circle-2:before {\\n          -webkit-animation-delay: -1.1s;\\n                  animation-delay: -1.1s;\\n      }\\n      .sk-fading-circle .sk-circle-3:before {\\n          -webkit-animation-delay: -1s;\\n                  animation-delay: -1s;\\n      }\\n      .sk-fading-circle .sk-circle-4:before {\\n          -webkit-animation-delay: -0.9s;\\n                  animation-delay: -0.9s;\\n      }\\n      .sk-fading-circle .sk-circle-5:before {\\n          -webkit-animation-delay: -0.8s;\\n                  animation-delay: -0.8s;\\n      }\\n      .sk-fading-circle .sk-circle-6:before {\\n          -webkit-animation-delay: -0.7s;\\n                  animation-delay: -0.7s;\\n      }\\n      .sk-fading-circle .sk-circle-7:before {\\n          -webkit-animation-delay: -0.6s;\\n                  animation-delay: -0.6s;\\n      }\\n      .sk-fading-circle .sk-circle-8:before {\\n          -webkit-animation-delay: -0.5s;\\n                  animation-delay: -0.5s;\\n      }\\n      .sk-fading-circle .sk-circle-9:before {\\n          -webkit-animation-delay: -0.4s;\\n                  animation-delay: -0.4s;\\n      }\\n      .sk-fading-circle .sk-circle-10:before {\\n          -webkit-animation-delay: -0.3s;\\n                  animation-delay: -0.3s;\\n      }\\n      .sk-fading-circle .sk-circle-11:before {\\n          -webkit-animation-delay: -0.2s;\\n                  animation-delay: -0.2s;\\n      }\\n      .sk-fading-circle .sk-circle-12:before {\\n          -webkit-animation-delay: -0.1s;\\n                  animation-delay: -0.1s;\\n      }\\n      \\n      @-webkit-keyframes sk-fading-circle-delay {\\n          0%, 39%, 100% {\\n          opacity: 0;\\n          }\\n          40% {\\n          opacity: 1;\\n          }\\n      }\\n      \\n      @keyframes sk-fading-circle-delay {\\n          0%, 39%, 100% {\\n          opacity: 0;\\n          }\\n          40% {\\n          opacity: 1;\\n          }\\n      }\");\n  document.head.append(spinnerStyle);\n  return spinner;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadSpinner);\n\n//# sourceURL=webpack://3dglo/./src/modules/loadSpinner.js?");

/***/ }),

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _loadSpinner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadSpinner */ \"./src/modules/loadSpinner.js\");\n\n\nvar sendForm = function sendForm() {\n  var errorMessage = 'Что-то пошло не так...';\n  var successMessage = 'Спасибо! Мы скоро с вами свяжемся!';\n  var forms = document.querySelectorAll('form');\n  var statusMessage = document.createElement('div');\n  statusMessage.style.cssText = 'font-size: 2rem; color: red;';\n\n  var postData = function postData(body) {\n    return fetch('server.php', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json; charset=utf-8'\n      },\n      body: JSON.stringify(body)\n    });\n  };\n\n  var requestForm = function requestForm(form, event) {\n    event.preventDefault();\n    form.append(statusMessage);\n    statusMessage.insertAdjacentElement('afterbegin', (0,_loadSpinner__WEBPACK_IMPORTED_MODULE_0__.default)());\n    var formData = new FormData(form);\n    var body = {}; // for (let value of formData.entries()) {\n    //   console.log(value);\n    //   body[value[0]] = value[1];\n    // }\n\n    formData.forEach(function (value, key) {\n      return body[key] = value;\n    });\n\n    var formReset = function formReset() {\n      form.reset();\n      setTimeout(function () {\n        statusMessage.textContent = '';\n      }, 2000);\n    };\n\n    postData(body).then(function (response) {\n      if (response.status !== 200) {\n        throw new Error(\"status: \".concat(response.status));\n      }\n\n      statusMessage.textContent = successMessage;\n      formReset();\n    })[\"catch\"](function (error) {\n      console.error(error);\n      statusMessage.textContent = errorMessage;\n      formReset();\n    });\n  };\n\n  forms.forEach(function (form) {\n    return form.addEventListener('submit', function (event) {\n      return requestForm(form, event);\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://3dglo/./src/modules/sendForm.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar slider = function slider() {\n  var slide = document.querySelectorAll('.portfolio-item'),\n      slider = document.querySelector('.portfolio-content'),\n      dots = document.querySelector('.portfolio-dots');\n  var currentSlide = 0,\n      interval;\n\n  var renderDots = function renderDots(parent, count, currentClass, activeClass) {\n    for (var i = 0; i < count; i++) {\n      var newDot = document.createElement('li');\n\n      if (i === 0) {\n        newDot.classList.add(activeClass);\n      }\n\n      newDot.classList.add(currentClass);\n      parent.insertAdjacentElement('beforeend', newDot);\n    }\n  };\n\n  renderDots(dots, slide.length, 'dot', 'dot-active');\n  var dot = document.querySelectorAll('.dot');\n\n  var prevSlide = function prevSlide(elem, index, strClass) {\n    return elem[index].classList.remove(strClass);\n  };\n\n  var nextSlide = function nextSlide(elem, index, strClass) {\n    return elem[index].classList.add(strClass);\n  };\n\n  var autoPlaySlide = function autoPlaySlide() {\n    prevSlide(slide, currentSlide, 'portfolio-item-active');\n    prevSlide(dot, currentSlide, 'dot-active');\n    currentSlide++;\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    nextSlide(slide, currentSlide, 'portfolio-item-active');\n    nextSlide(dot, currentSlide, 'dot-active');\n  };\n\n  var startSlide = function startSlide() {\n    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3000;\n    interval = setInterval(autoPlaySlide, time);\n  };\n\n  var stopSlide = function stopSlide() {\n    clearInterval(interval);\n  };\n\n  slider.addEventListener('click', function (event) {\n    event.preventDefault();\n    var target = event.target;\n\n    if (!target.matches('.portfolio-btn, .dot')) {\n      return;\n    }\n\n    prevSlide(slide, currentSlide, 'portfolio-item-active');\n    prevSlide(dot, currentSlide, 'dot-active');\n\n    if (target.matches('#arrow-right')) {\n      currentSlide++;\n    } else if (target.matches('#arrow-left')) {\n      currentSlide--;\n    } else if (target.matches('.dot')) {\n      dot.forEach(function (elem, index) {\n        if (elem === target) {\n          currentSlide = index;\n        }\n      });\n    }\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    if (currentSlide < 0) {\n      currentSlide = slide.length - 1;\n    }\n\n    nextSlide(slide, currentSlide, 'portfolio-item-active');\n    nextSlide(dot, currentSlide, 'dot-active');\n  });\n  slider.addEventListener('mouseover', function (event) {\n    if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {\n      stopSlide();\n    }\n  });\n  slider.addEventListener('mouseout', function (event) {\n    if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {\n      startSlide();\n    }\n  });\n  startSlide(1500);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://3dglo/./src/modules/slider.js?");

/***/ }),

/***/ "./src/modules/tabs.js":
/*!*****************************!*\
  !*** ./src/modules/tabs.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar tabs = function tabs() {\n  var tabHeader = document.querySelector('.service-header'),\n      tab = tabHeader.querySelectorAll('.service-header-tab'),\n      tabContent = document.querySelectorAll('.service-tab');\n\n  var toggleTabContent = function toggleTabContent(index) {\n    for (var i = 0; i < tabContent.length; i++) {\n      if (index === i) {\n        tab[i].classList.add('active');\n        tabContent[i].classList.remove('d-none');\n      } else {\n        tab[i].classList.remove('active');\n        tabContent[i].classList.add('d-none');\n      }\n    }\n  };\n\n  tabHeader.addEventListener('click', function (event) {\n    var target = event.target.closest('.service-header-tab');\n\n    if (target) {\n      tab.forEach(function (item, index) {\n        if (item === target) {\n          toggleTabContent(index);\n        }\n      });\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack://3dglo/./src/modules/tabs.js?");

/***/ }),

/***/ "./src/modules/toggleMenu.js":
/*!***********************************!*\
  !*** ./src/modules/toggleMenu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar toggleMenu = function toggleMenu() {\n  var menu = document.querySelector('menu');\n\n  var handlerMenu = function handlerMenu() {\n    return menu.classList.toggle('active-menu');\n  };\n\n  document.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.classList.contains('close-btn')) {\n      handlerMenu();\n    }\n\n    if (target.closest('.menu')) {\n      handlerMenu();\n    } else if (menu.classList.contains('active-menu') && !target.closest('menu')) {\n      handlerMenu();\n    }\n\n    var smoothScroll = function smoothScroll(id) {\n      document.getElementById(id).scrollIntoView({\n        behavior: 'smooth',\n        block: 'start'\n      });\n    };\n\n    if (target.closest('a[href=\"#service-block\"]')) {\n      event.preventDefault();\n      smoothScroll('service-block');\n    }\n\n    if (target.closest('li>a')) {\n      event.preventDefault();\n      var blockID = target.getAttribute('href').substr(1);\n      smoothScroll(blockID);\n      handlerMenu();\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleMenu);\n\n//# sourceURL=webpack://3dglo/./src/modules/toggleMenu.js?");

/***/ }),

/***/ "./src/modules/togglePopup.js":
/*!************************************!*\
  !*** ./src/modules/togglePopup.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _animate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animate */ \"./src/modules/animate.js\");\n\n\nvar togglePopup = function togglePopup() {\n  var popup = document.querySelector('.popup'),\n      popupBtns = document.querySelectorAll('.popup-btn');\n\n  var openModal = function openModal() {\n    popup.style.display = 'block';\n    popup.style.opacity = 0;\n\n    if (window.innerWidth >= 768) {\n      (0,_animate__WEBPACK_IMPORTED_MODULE_0__.default)({\n        duration: 1000,\n        timing: function timing(timeFraction) {\n          return timeFraction;\n        },\n        draw: function draw(progress) {\n          popup.style.opacity = progress;\n        }\n      });\n    } else {\n      popup.style.opacity = 1;\n    }\n  };\n\n  var closeModal = function closeModal() {\n    if (window.innerWidth >= 768) {\n      (0,_animate__WEBPACK_IMPORTED_MODULE_0__.default)({\n        duration: 500,\n        timing: function timing(timeFraction) {\n          return timeFraction;\n        },\n        draw: function draw(progress) {\n          popup.style.opacity = 1 - progress;\n          setTimeout(function () {\n            popup.style.display = 'none';\n          }, 500);\n        }\n      });\n    } else {\n      popup.style.display = 'none';\n      popup.style.opacity = 0;\n    }\n  };\n\n  popupBtns.forEach(function (btn) {\n    return btn.addEventListener('click', openModal);\n  });\n  popup.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.classList.contains('popup-close')) {\n      closeModal();\n    } else {\n      target = target.closest('.popup-content');\n\n      if (!target) {\n        closeModal();\n      }\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (togglePopup);\n\n//# sourceURL=webpack://3dglo/./src/modules/togglePopup.js?");

/***/ }),

/***/ "./src/modules/validForm.js":
/*!**********************************!*\
  !*** ./src/modules/validForm.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar validForm = function validForm() {\n  var inputs = document.querySelectorAll('input[id]');\n\n  var _iterator = _createForOfIteratorHelper(inputs),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var input = _step.value;\n      input.addEventListener('blur', function (event) {\n        var target = event.target;\n\n        if (target.classList.contains('form-name')) {\n          var arr = [];\n          target.value = target.value.replace(/[^а-яё -]/gi, '').replace(/-+/g, '-').replace(/ +/g, ' ').replace(/^-/g, '').replace(/^ /g, '').replace(/-$/g, '').replace(/ $/g, '');\n\n          if (target.value) {\n            target.value = target.value[0].toUpperCase() + target.value.slice(1).toLowerCase();\n            target.value.split(' ').forEach(function (elem) {\n              return arr.push(elem[0].toUpperCase() + elem.slice(1));\n            });\n            target.value = arr.join(' ');\n          }\n        }\n\n        if (target.classList.contains('form-email')) {\n          target.value = target.value.replace(/[^a-z@_.!~*'\\-]/gi, '').trim().replace(/-+/g, '-').replace(/^-/g, '').replace(/-$/g, '').replace(/ +/g, '').replace(' ', '');\n        }\n\n        if (target.classList.contains('form-phone')) {\n          target.value = target.value.replace(/[^0-9\\+]/gi, '').replace(/-+/g, '-').replace(/^-/g, '').replace(/-$/g, '');\n        }\n\n        if (target.closest('#form2-message')) {\n          target.value = target.value.replace(/[^а-яё0-9,!?. -]/gi, '').replace(/-+/g, '-').replace(/ +/g, ' ').replace(/^-/g, '').replace(/^ /g, '').replace(/-$/g, '').replace(/ $/g, '');\n        }\n      });\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validForm);\n\n//# sourceURL=webpack://3dglo/./src/modules/validForm.js?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;