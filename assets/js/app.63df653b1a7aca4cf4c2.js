!function(e){function t(t){for(var n,i,a=t[0],F=t[1],c=t[2],s=0,d=[];s<a.length;s++)i=a[s],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(n in F)Object.prototype.hasOwnProperty.call(F,n)&&(e[n]=F[n]);for(l&&l(t);d.length;)d.shift()();return r.push.apply(r,c||[]),u()}function u(){for(var e,t=0;t<r.length;t++){for(var u=r[t],n=!0,a=1;a<u.length;a++){var F=u[a];0!==o[F]&&(n=!1)}n&&(r.splice(t--,1),e=i(i.s=u[0]))}return e}var n={},o={0:0},r=[];function i(t){if(n[t])return n[t].exports;var u=n[t]={i:t,l:!1,exports:{}};return e[t].call(u.exports,u,u.exports,i),u.l=!0,u.exports}i.m=e,i.c=n,i.d=function(e,t,u){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:u})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var u=Object.create(null);if(i.r(u),Object.defineProperty(u,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(u,n,function(t){return e[t]}.bind(null,n));return u},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var a=window.webpackJsonp=window.webpackJsonp||[],F=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var l=F;r.push([32,2]),u()}({32:function(e,t,u){"use strict";u.r(t);u(33),u(62),u(63),u(66),u(68),u(70),u(72),u(74),u(76);var n=u(30),o=u(31),r=function(e){return document.querySelector(e)},i=function(e){return document.querySelectorAll(e)};document.addEventListener("DOMContentLoaded",(function(){document.body.scrollTop=document.documentElement.scrollTop=0;var e=i(".main_screen"),t=r(".main_slider");t.style.transform="translate3d(0, -5100px,0)",setTimeout((function(){t.style.transform="translate3d(0, 0,0)"}),1e3),setTimeout((function(){r(".preloader").classList.add("hidden")}),2e3);var u=i(".navigation_dot"),a=0,F=!1,c=0,l=!1,s=!1,d=function(){F=!0,c=-1*e[a].offsetHeight*a,e.forEach((function(e){return e.classList.remove("active")})),e[a].classList.add("active"),t.style.transform="translate3d(0,".concat(c,"px,0)"),u.forEach((function(e){return e.dataset.id==a?e.checked=!0:e.checked=!1})),setTimeout((function(){return F=!1}),1600)},f=function(){0!==a&&(1!=a||s)&&(a--,d())},D=function(){a!==e.length-1&&(1!=a||s)&&(a++,d())};document.addEventListener("wheel",(function(e){F||l||(e.wheelDelta>0||e.detail<0?f():(e.wheelDelta<0||e.detail>0)&&D())}));var v=null;document.addEventListener("touchstart",(function(e){v=e})),document.addEventListener("touchmove",(function(e){F||l||v&&(e.touches[0].pageY-v.touches[0].pageY>0?f():D())})),document.addEventListener("touched",(function(e){v=null})),u.forEach((function(e){e.addEventListener("click",(function(){a=e.dataset.id,l=1==a&&!s,d()}))})),new n.a(".splide").mount();var p=i(".roadmap_item"),m=!1,h=0,E=function(){h!==p.length-1&&(x(),h++)},x=function(){h===p.length-2&&(l=!1,setTimeout((function(){return s=!0}),1500)),m=!0,p.forEach((function(e){return e.classList.remove("active")})),p[h+1].classList.add("active"),function(e,t){var u=e.getBoundingClientRect(),n=t.getBoundingClientRect(),o=e.querySelector(".line_section"),r=e.querySelector(".line");o.style.top=e.offsetHeight/2+"px",o.style.left=e.offsetWidth/2+"px";var i=Math.sqrt(Math.pow(n.x-u.x,2)+Math.pow(n.y-u.y,2));document.documentElement.clientWidth>800?(o.style.width=i+"px",r.style.maxWidth=i+"px"):(o.style.height=i+"px",r.style.maxHeight=i+"px")}(p[h],p[h+1]),setTimeout((function(){return m=!1}),1600)};e[1].addEventListener("wheel",(function(e){m||s||(e.wheelDelta<0||e.detail>0)&&E()}));var g=null;document.addEventListener("touchstart",(function(e){g=e})),document.addEventListener("touchmove",(function(e){if(!m&&!s&&g){if(e.touches[0].pageY-g.touches[0].pageY>0)return;E()}})),document.addEventListener("touched",(function(e){g=null}));var y=r("#feedback_form"),b=r(".form_submit");console.log(y);Object(o.a)(y.phone,{mask:"+{375} 00 000 00 00"});var L=/^(((?:[\0-\x08\x0E-\x1F!#-'\*\+\x2D\/-9=\?A-Z\\\^-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+(\.(?:[\0-\x08\x0E-\x1F!#-'\*\+\x2D\/-9=\?A-Z\\\^-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)*)|("(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+"))@(((?:[\0-\x08\x0E-\x1F!#-'\*\+\x2D\/-9=\?A-Z\\\^-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+\.)+(?:[\0-\x08\x0E-\x1F!#-'\*\+\x2D\/-9=\?A-Z\\\^-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]){2,})$/i,_=/^[а-яА-ЯёЁ]+$/,B=/^\+375 (25|29|33|34) ([0-9]{3}( [0-9]{2}){2})$/,C=function(){var e=!0;0!==y.email.value.trim().length&&!1!==A(y.email.value)||(e=!1),0!==y.phone.value.trim().length&&!1!==k(y.phone.value)||(e=!1),0!==y.name.value.trim().length&&!1!==O(y.name.value)||(e=!1),console.log(e),e?(console.log(3234),b.disabled=!1):b.disabled=!0},w=function(e,t,u){e(t.value)?t.style.borderColor="green":t.style.borderColor="red",u()},A=function(e){return L.test(e)},O=function(e){return _.test(e)},k=function(e){return B.test(e)};y.email.addEventListener("input",(function(e){w(A,e.target,C)})),y.name.addEventListener("input",(function(e){w(O,e.target,C)})),y.phone.addEventListener("input",(function(e){w(k,e.target,C)})),b.addEventListener("click",(function(e){e.preventDefault(),r(".success_modal").classList.add("active"),r(".bg-mask._modal").classList.add("active")})),r(".close_modal_button").addEventListener("click",(function(){r(".success_modal").classList.remove("active"),r(".bg-mask._modal").classList.remove("active")}))}))},74:function(e,t,u){var n=u(6),o=u(75);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={insert:"head",singleton:!1};n(o,r);e.exports=o.locals||{}},75:function(e,t,u){},76:function(e,t,u){var n=u(6),o=u(77);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={insert:"head",singleton:!1};n(o,r);e.exports=o.locals||{}},77:function(e,t,u){}});