
import '@splidejs/splide/src/css/core/index.scss';
import '@splidejs/splide/src/css/themes/default/index.scss';
import "./assets/css/main.css";
import "./assets/scss/main.scss";
import Splide from '@splidejs/splide';
import IMask from 'imask';

const qs = (selector) => document.querySelector(selector)
const qsa = (selector) => document.querySelectorAll(selector)


document.addEventListener('DOMContentLoaded', function () {
  document.body.scrollTop = document.documentElement.scrollTop = 0;
  //PAGE SLIDER
  const screens = qsa('.main_screen')
  const mainSlider = qs('.main_slider')
  const navSlider = qsa('.navigation_dot')
  let activeScreen = 0
  let scrollingIsActive = false
  let scrollingTime = 1800
  let transformValue = 0
  let stopScroll = false
  let roadMapDone = false


  const switchPages = () => {
    scrollingIsActive = true
    transformValue = -1 * screens[activeScreen].offsetHeight * activeScreen
    screens.forEach(i => i.classList.remove('active'))
    screens[activeScreen].classList.add('active')
    mainSlider.style.transform = `translate3d(0,${transformValue}px,0)`
    navSlider.forEach(e => e.dataset.id == activeScreen ? e.checked = true : e.checked = false)
    setTimeout(function () {
      return scrollingIsActive = false;
    }, scrollingTime);
  }

  const scrollingUp = () => {
    if (activeScreen === 0) {
      return
    }
    if (activeScreen == 1 && !roadMapDone) {
      stopScroll == true
      return
    }
    activeScreen--
    switchPages()
  }
  const scrollingDown = () => {
    if (activeScreen === screens.length - 1) {
      return
    }
    if (activeScreen == 1 && !roadMapDone) {
      stopScroll == true
      return
    }
    activeScreen++
    switchPages()
  }
  //slide
  document.addEventListener('wheel', function (e) {
    if (scrollingIsActive || stopScroll) {
      return
    }
    if (e.wheelDelta > 0 || e.detail < 0) {
      scrollingUp()
    } else if (e.wheelDelta < 0 || e.detail > 0) {
      scrollingDown()
    }
  })
  //touch
  let event = null;
  document.addEventListener("touchstart", function (e) {
    event = e;
  });
  document.addEventListener("touchmove", function (e) {
    if (scrollingIsActive || stopScroll) {
      return
    }
    if (event) {
      if ((e.touches[0].pageY - event.touches[0].pageY) > 0) {
        scrollingUp()
      } else {
        scrollingDown()
      }
    }
  });
  document.addEventListener("touched", function (e) {
    event = null;
  });
  //dot 
  navSlider.forEach(e => {
    e.addEventListener('click', function () {
      activeScreen = e.dataset.id
      if (activeScreen == 1 && !roadMapDone) {
        stopScroll = true
      } else {
        stopScroll = false
      }
      switchPages()
    })
  })
  //PAGE SLIDER END

  new Splide('.splide').mount();


  //main 2 animation
  const roadItems = qsa('.roadmap_item')
  let scrollingIsActiveRoad = false
  let activeRoadItem = 0

  const drawLine = (elem1, elem2) => {
    let coords1 = elem1.getBoundingClientRect();
    let coords2 = elem2.getBoundingClientRect();
    const line_section = elem1.querySelector('.line_section')
    const line = elem1.querySelector('.line')
    line_section.style.top = elem1.offsetHeight / 2 + 'px'
    line_section.style.left = elem1.offsetWidth / 2 + 'px'
    let d = Math.sqrt(Math.pow((coords2.x - coords1.x), 2) + Math.pow((coords2.y - coords1.y), 2)); // длина прямой после анимации
    if(document.documentElement.clientWidth  > 800) {
      line_section.style.width = d + 'px'
      line.style.maxWidth = d + 'px'
    } else {
      line_section.style.height = d + 'px'
      line.style.maxHeight = d + 'px'
    }

  }

  const scrollingDownRoad = () => {
    if (activeRoadItem === roadItems.length - 1) {
      return
    }
    connectionRoadItem()
    activeRoadItem++

  }

  const connectionRoadItem = () => {
    if (activeRoadItem === roadItems.length - 2) {

      stopScroll = false
      setTimeout(() => roadMapDone = true, 1500)

    }
    scrollingIsActiveRoad = true
    roadItems.forEach(i => i.classList.remove('active'))
    roadItems[activeRoadItem + 1].classList.add('active')
    drawLine(roadItems[activeRoadItem], roadItems[activeRoadItem + 1])
    setTimeout(function () {
      return scrollingIsActiveRoad = false;
    }, scrollingTime);
  }
  //slide
  screens[1].addEventListener('wheel', function (e) {
    if (scrollingIsActiveRoad) {
      return
    }
    if (roadMapDone) {
      return
    }
    if (e.wheelDelta < 0 || e.detail > 0) {
      scrollingDownRoad()
    }
  })

  //touch
  let eventRoad = null;
  document.addEventListener("touchstart", function (e) {
    eventRoad = e;
  });
  document.addEventListener("touchmove", function (e) {
    if (scrollingIsActiveRoad) {
      return
    }
    if (roadMapDone) {
      return
    }
    if (eventRoad) {
      if ((e.touches[0].pageY - eventRoad.touches[0].pageY) > 0) {
        return
      } else {
        scrollingDownRoad()
      }
    }
  });
  document.addEventListener("touched", function (e) {
    eventRoad = null;
  });


  //form 
  const feedbackForm = qs('#feedback_form')
  const submitButton = qs('.form_submit')
  
  console.log(feedbackForm)
  const maskPhone = IMask(feedbackForm.phone, {
    mask: '+{375} 00 000 00 00'
  })

  const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu
  const NAME_REGEXP = /^[а-яА-ЯёЁ]+$/
  const PHONE_REGXP = /^\+375 (25|29|33|34) ([0-9]{3}( [0-9]{2}){2})$/
  const validateForm = () => {
    let check = true
    if (feedbackForm.email.value.trim().length === 0 || isEmailValid(feedbackForm.email.value) === false) {
      check = false
    }
    if (feedbackForm.phone.value.trim().length === 0 || isPhoneValid(feedbackForm.phone.value) === false) {
      check = false
    }
    if (feedbackForm.name.value.trim().length === 0 || isNameValid(feedbackForm.name.value) === false) {
      check = false
    }
    console.log(check)
    if (check) {
      console.log(3234)
      submitButton.disabled = false
    } else {
      submitButton.disabled = true
    }
  }
  const  onInput = (isValid, element, validateForm) => {
    if (isValid(element.value)) {
      element.style.borderColor = 'green'
    } else {
      element.style.borderColor = 'red'
    }
    validateForm()
  }
  const  isEmailValid = (value) => {
    return EMAIL_REGEXP.test(value)
  }
  const  isNameValid = (value) => {
    return NAME_REGEXP.test(value)
  }
  const isPhoneValid = (value) => {
    return PHONE_REGXP.test(value)
  }
  feedbackForm.email.addEventListener('input', function (e) { onInput(isEmailValid, e.target, validateForm) })
  feedbackForm.name.addEventListener('input', function (e) { onInput(isNameValid, e.target, validateForm) })
  feedbackForm.phone.addEventListener('input', function (e) { onInput(isPhoneValid, e.target, validateForm) })

  submitButton.addEventListener('click', function(e) {
    e.preventDefault()
    qs('.success_modal').classList.add('active')
    qs('.bg-mask._modal').classList.add('active')
  })
  qs('.close_modal_button').addEventListener('click', function() {
    qs('.success_modal').classList.remove('active')
    qs('.bg-mask._modal').classList.remove('active')
  })
  

})
