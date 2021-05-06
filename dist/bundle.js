(()=>{"use strict";const e=function(e){return e<10?"0"+e:e},t=function(t){var n,r,i,a,c=document.getElementById("timer-hours"),o=document.getElementById("timer-minutes"),s=document.getElementById("timer-seconds");n=(new Date(t).getTime()-(new Date).getTime())/1e3,r=Math.floor(n)%60,i=Math.floor(n/60)%60,(a={timeRemaining:n,hours:Math.floor(n/60/60),minutes:i,seconds:r}).timeRemaining>0?(c.textContent=e(a.hours),o.textContent=e(a.minutes),s.textContent=e(a.seconds)):(c.textContent="00",o.textContent="00",s.textContent="00")},n=function(){var e=new Date;return new Date(e.setDate(e.getDate()+1)),new Date(e.setHours(0,0,0)),new Date(e.setDate(e.getDate()))},r=function(e){var t=e.timing,n=e.draw,r=e.duration,i=performance.now();requestAnimationFrame((function e(a){var c=(a-i)/r;c>1&&(c=1);var o=t(c);n(o),c<1&&requestAnimationFrame(e)}))};function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var a,c,o,s,l,d,u,f,m,v,g;t(n()),setInterval(t,1e3,n()),v=document.querySelector("menu"),g=function(){return v.classList.toggle("active-menu")},document.addEventListener("click",(function(e){var t=e.target;t.classList.contains("close-btn")&&g(),(t.closest(".menu")||v.classList.contains("active-menu")&&!t.closest("menu"))&&g();var n=function(e){document.getElementById(e).scrollIntoView({behavior:"smooth",block:"start"})};t.closest('a[href="#service-block"]')&&(e.preventDefault(),n("service-block")),t.closest("li>a")&&(e.preventDefault(),n(t.getAttribute("href").substr(1)),g())})),d=document.querySelector(".popup"),u=document.querySelectorAll(".popup-btn"),f=function(){d.style.display="block",d.style.opacity=0,window.innerWidth>=768?r({duration:300,timing:function(e){return e},draw:function(e){d.style.opacity=e}}):d.style.opacity=1},m=function(){window.innerWidth>=768?r({duration:300,timing:function(e){return e},draw:function(e){d.style.opacity=1-e,setTimeout((function(){d.style.display="none"}),300)}}):(d.style.display="none",d.style.opacity=0)},u.forEach((function(e){return e.addEventListener("click",f)})),d.addEventListener("click",(function(e){var t=e.target;t.classList.contains("popup-close")?m():(t=t.closest(".popup-content"))||m()})),o=document.querySelector(".service-header"),s=o.querySelectorAll(".service-header-tab"),l=document.querySelectorAll(".service-tab"),o.addEventListener("click",(function(e){var t=e.target.closest(".service-header-tab");t&&s.forEach((function(e,n){e===t&&function(e){for(var t=0;t<l.length;t++)e===t?(s[t].classList.add("active"),l[t].classList.remove("d-none")):(s[t].classList.remove("active"),l[t].classList.add("d-none"))}(n)}))})),function(){var e,t=document.querySelectorAll(".portfolio-item"),n=document.querySelector(".portfolio-content"),r=document.querySelector(".portfolio-dots"),i=0;!function(e,t,n,r){for(var i=0;i<t;i++){var a=document.createElement("li");0===i&&a.classList.add("dot-active"),a.classList.add("dot"),e.insertAdjacentElement("beforeend",a)}}(r,t.length);var a=document.querySelectorAll(".dot"),c=function(e,t,n){return e[t].classList.remove(n)},o=function(e,t,n){return e[t].classList.add(n)},s=function(){c(t,i,"portfolio-item-active"),c(a,i,"dot-active"),++i>=t.length&&(i=0),o(t,i,"portfolio-item-active"),o(a,i,"dot-active")},l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3;e=setInterval(s,t)};n.addEventListener("click",(function(e){e.preventDefault();var n=e.target;n.matches(".portfolio-btn, .dot")&&(c(t,i,"portfolio-item-active"),c(a,i,"dot-active"),n.matches("#arrow-right")?i++:n.matches("#arrow-left")?i--:n.matches(".dot")&&a.forEach((function(e,t){e===n&&(i=t)})),i>=t.length&&(i=0),i<0&&(i=t.length-1),o(t,i,"portfolio-item-active"),o(a,i,"dot-active"))})),n.addEventListener("mouseover",(function(t){(t.target.matches(".portfolio-btn")||t.target.matches(".dot"))&&clearInterval(e)})),n.addEventListener("mouseout",(function(e){(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&l()})),l(1500)}(),a=document.getElementById("command"),c=function(e){var t=e.target.closest(".command__photo");if(t){var n=t.dataset.img;t.dataset.img=t.src,t.src=n}},a.addEventListener("mouseover",c),a.addEventListener("mouseout",c),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,t=document.querySelector(".calc-block"),n=document.querySelector(".calc-type"),i=document.querySelector(".calc-square"),a=document.querySelector(".calc-count"),c=document.querySelector(".calc-day"),o=document.getElementById("total"),s=function(){var t=0,s=1,l=1,d=+i.value,u=parseFloat(n.options[n.selectedIndex].value);a.value>1&&(s+=(a.value-1)/10),c.value&&c.value<5?l*=2:c.value&&c.value<10&&(l*=1.5),u&&d&&(t=e*u*d*s*l),r({duration:300,timing:function(e){return e},draw:function(e){o.textContent=Math.round(t*e)}})};t.addEventListener("change",(function(e){var t=e.target;(t.matches("select")||t.matches("input"))&&s()}));var l=function(){t.addEventListener("input",(function(e){var t=e.target.closest("input");t&&(t.value=t.value.replace(/\D/gi,"").replace(/^0/gi,""))}))};l()}(100),function(){var e,t=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,c=e},f:function(){try{o||null==n.return||n.return()}finally{if(s)throw c}}}}(document.querySelectorAll("input[id]"));try{for(t.s();!(e=t.n()).done;)e.value.addEventListener("blur",(function(e){var t=e.target;if(t.classList.contains("form-name")){var n=[];t.value=t.value.replace(/[^а-яё -]/gi,"").replace(/-+/g,"-").replace(/ +/g," ").replace(/^-/g,"").replace(/^ /g,"").replace(/-$/g,"").replace(/ $/g,""),t.value&&(t.value=t.value[0].toUpperCase()+t.value.slice(1).toLowerCase(),t.value.split(" ").forEach((function(e){return n.push(e[0].toUpperCase()+e.slice(1))})),t.value=n.join(" "))}t.classList.contains("form-email")&&(t.setAttribute("required","required"),t.value=t.value.replace(/[^a-z@_.!~*'\-]/gi,"").trim().replace(/-+/g,"-").replace(/^-/g,"").replace(/-$/g,"").replace(/ +/g,"").replace(" ","")),t.classList.contains("form-phone")&&(t.value=t.value.replace(/[^0-9\+]/gi,"").replace(/-+/g,"-").replace(/^-/g,"").replace(/-$/g,"")),t.closest("#form2-message")&&(t.setAttribute("required","required"),t.value=t.value.replace(/[^а-яё0-9,!?. -]/gi,"").replace(/-+/g,"-").replace(/ +/g," ").replace(/^-/g,"").replace(/^ /g,"").replace(/-$/g,"").replace(/ $/g,""))}))}catch(e){t.e(e)}finally{t.f()}}(),function(){var e=document.querySelectorAll("form"),t=document.createElement("div");t.style.cssText="font-size: 2rem; color: red;";var n=function(e,n){var r,i;n.preventDefault(),e.append(t),t.insertAdjacentElement("afterbegin",(r=document.createElement("section"),i=document.createElement("style"),r.insertAdjacentHTML("afterbegin","  \n      <div class='sk-fading-circle'>\n          <div class='sk-circle sk-circle-1'></div>\n          <div class='sk-circle sk-circle-2'></div>\n          <div class='sk-circle sk-circle-3'></div>\n          <div class='sk-circle sk-circle-4'></div>\n          <div class='sk-circle sk-circle-5'></div>\n          <div class='sk-circle sk-circle-6'></div>\n          <div class='sk-circle sk-circle-7'></div>\n          <div class='sk-circle sk-circle-8'></div>\n          <div class='sk-circle sk-circle-9'></div>\n          <div class='sk-circle sk-circle-10'></div>\n          <div class='sk-circle sk-circle-11'></div>\n          <div class='sk-circle sk-circle-12'></div>\n      </div>"),i.insertAdjacentHTML("afterbegin",'\n      .sk-fading-circle {\n          width: 4em;\n          height: 4em;\n          position: relative;\n          margin: 10px auto;\n      }\n      .sk-fading-circle .sk-circle {\n          width: 100%;\n          height: 100%;\n          position: absolute;\n          left: 0;\n          top: 0;\n      }\n      .sk-fading-circle .sk-circle:before {\n          content: "";\n          display: block;\n          margin: 0 auto;\n          width: 15%;\n          height: 15%;\n          background-color: #337ab7;\n          border-radius: 100%;\n          -webkit-animation: sk-fading-circle-delay 1.2s infinite ease-in-out both;\n                  animation: sk-fading-circle-delay 1.2s infinite ease-in-out both;\n      }\n      .sk-fading-circle .sk-circle-2 {\n          transform: rotate(30deg);\n      }\n      .sk-fading-circle .sk-circle-3 {\n          transform: rotate(60deg);\n      }\n      .sk-fading-circle .sk-circle-4 {\n          transform: rotate(90deg);\n      }\n      .sk-fading-circle .sk-circle-5 {\n          transform: rotate(120deg);\n      }\n      .sk-fading-circle .sk-circle-6 {\n          transform: rotate(150deg);\n      }\n      .sk-fading-circle .sk-circle-7 {\n          transform: rotate(180deg);\n      }\n      .sk-fading-circle .sk-circle-8 {\n          transform: rotate(210deg);\n      }\n      .sk-fading-circle .sk-circle-9 {\n          transform: rotate(240deg);\n      }\n      .sk-fading-circle .sk-circle-10 {\n          transform: rotate(270deg);\n      }\n      .sk-fading-circle .sk-circle-11 {\n          transform: rotate(300deg);\n      }\n      .sk-fading-circle .sk-circle-12 {\n          transform: rotate(330deg);\n      }\n      .sk-fading-circle .sk-circle-2:before {\n          -webkit-animation-delay: -1.1s;\n                  animation-delay: -1.1s;\n      }\n      .sk-fading-circle .sk-circle-3:before {\n          -webkit-animation-delay: -1s;\n                  animation-delay: -1s;\n      }\n      .sk-fading-circle .sk-circle-4:before {\n          -webkit-animation-delay: -0.9s;\n                  animation-delay: -0.9s;\n      }\n      .sk-fading-circle .sk-circle-5:before {\n          -webkit-animation-delay: -0.8s;\n                  animation-delay: -0.8s;\n      }\n      .sk-fading-circle .sk-circle-6:before {\n          -webkit-animation-delay: -0.7s;\n                  animation-delay: -0.7s;\n      }\n      .sk-fading-circle .sk-circle-7:before {\n          -webkit-animation-delay: -0.6s;\n                  animation-delay: -0.6s;\n      }\n      .sk-fading-circle .sk-circle-8:before {\n          -webkit-animation-delay: -0.5s;\n                  animation-delay: -0.5s;\n      }\n      .sk-fading-circle .sk-circle-9:before {\n          -webkit-animation-delay: -0.4s;\n                  animation-delay: -0.4s;\n      }\n      .sk-fading-circle .sk-circle-10:before {\n          -webkit-animation-delay: -0.3s;\n                  animation-delay: -0.3s;\n      }\n      .sk-fading-circle .sk-circle-11:before {\n          -webkit-animation-delay: -0.2s;\n                  animation-delay: -0.2s;\n      }\n      .sk-fading-circle .sk-circle-12:before {\n          -webkit-animation-delay: -0.1s;\n                  animation-delay: -0.1s;\n      }\n      \n      @-webkit-keyframes sk-fading-circle-delay {\n          0%, 39%, 100% {\n          opacity: 0;\n          }\n          40% {\n          opacity: 1;\n          }\n      }\n      \n      @keyframes sk-fading-circle-delay {\n          0%, 39%, 100% {\n          opacity: 0;\n          }\n          40% {\n          opacity: 1;\n          }\n      }'),document.head.append(i),r));var a=new FormData(e),c={};a.forEach((function(e,t){return c[t]=e}));var o=function(){e.reset(),setTimeout((function(){t.textContent=""}),2e3)};(function(e){return fetch("server.php",{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify(e)})})(c).then((function(e){if(200!==e.status)throw new Error("status: ".concat(e.status));t.textContent="Спасибо! Мы скоро с вами свяжемся!",o()})).catch((function(e){console.error(e),t.textContent="Что-то пошло не так...",o()}))};e.forEach((function(e){return e.addEventListener("submit",(function(t){return n(e,t)}))}))}()})();