function lightMode(body) {
  const foto = document.getElementById("foto")
  foto.src = "./img/foto-dia.jpg"

  //cambiamos las variables de css
  body.style.setProperty("--bg-color", "#eee")
  body.style.setProperty("--bg-dark", "#999")
  body.style.setProperty("--bg-secondary-color", "#aaa")
  body.style.setProperty("--navbar-bg", "rgba(0, 0, 0, 0.8)")
  body.style.setProperty("--text-color", "#111")
  body.style.setProperty("--text-gradient", "#444")
  body.style.setProperty(
    "--bg-button-theme",
    "url(../img/background-space.jpg)"
  )
  body.style.setProperty("--dark-mode", "0")
  body.style.setProperty("--light-mode", "unset")
  body.style.setProperty("--box-small-shadow", "0px 6px 16px -4px #000")
}
function darkMode(body) {
  const foto = document.getElementById("foto")
  foto.src = "./img/foto-noche.jpg"

  //cambiamos las variables de css
  body.style.setProperty("--bg-color", "#222")
  body.style.setProperty("--bg-dark", "#111")
  body.style.setProperty("--bg-secondary-color", "#555")
  body.style.setProperty("--navbar-bg", "rgba(255, 255, 255, 0.8)")
  body.style.setProperty("--text-color", "#fff")
  body.style.setProperty("--text-gradient", "#bbb")
  body.style.setProperty("--bg-button-theme", "url(../img/background-sky.jpg)")
  body.style.setProperty("--dark-mode", "unset")
  body.style.setProperty("--light-mode", "0")
  body.style.setProperty("--box-small-shadow", "0px 6px 16px 0px #000")
}
function changeTheme(load) {
  const body = document.getElementById("body")
  if (!load) {
    //seteamos un atributo en localstorage para persistir el tema elegido por el usuario si refresca la página
    window.localStorage.getItem("light-theme") === "false"
      ? window.localStorage.setItem("light-theme", "true")
      : window.localStorage.setItem("light-theme", "false")
  }
  const localStorageTheme = window.localStorage.getItem("light-theme")
  if (localStorageTheme === "true" || !localStorageTheme) {
    lightMode(body)
  } else if (localStorageTheme === "false") {
    darkMode(body)
  }
}
function navbarSkills(selected) {
  const especialidades = document.getElementById("esp")
  const aprendiendo = document.getElementById("apr")
  const pendientes = document.getElementById("pen")
  const boxEsp = document.getElementById("skills1")
  const boxApr = document.getElementById("skills2")
  const boxPen = document.getElementById("skills3")
  if (selected === "esp") {
    especialidades.classList.add("skillsButtonActive")
    aprendiendo.classList.remove("skillsButtonActive")
    pendientes.classList.remove("skillsButtonActive")
    boxEsp.classList.remove("skillsNoDisplay")
    boxEsp.classList.add("skillsDisplay")
    boxApr.classList.remove("skillsDisplay")
    boxApr.classList.add("skillsNoDisplay")
    boxPen.classList.remove("skillsDisplay")
    boxPen.classList.add("skillsNoDisplay")
  } else if (selected === "apr") {
    aprendiendo.classList.add("skillsButtonActive")
    especialidades.classList.remove("skillsButtonActive")
    pendientes.classList.remove("skillsButtonActive")
    boxApr.classList.add("skillsDisplay")
    boxApr.classList.remove("skillsNoDisplay")
    boxEsp.classList.remove("skillsDisplay")
    boxEsp.classList.add("skillsNoDisplay")
    boxPen.classList.remove("skillsDisplay")
    boxPen.classList.add("skillsNoDisplay")
  } else if (selected === "pen") {
    pendientes.classList.add("skillsButtonActive")
    aprendiendo.classList.remove("skillsButtonActive")
    especialidades.classList.remove("skillsButtonActive")
    boxPen.classList.add("skillsDisplay")
    boxPen.classList.remove("skillsNoDisplay")
    boxEsp.classList.remove("skillsDisplay")
    boxEsp.classList.add("skillsNoDisplay")
    boxApr.classList.remove("skillsDisplay")
    boxApr.classList.add("skillsNoDisplay")
  }
}
function toggleHandler() {
  const list = document.querySelector(".navbarList")
  list.classList.toggle("nav-menu_visible")
}
function activeLinkNavbar(active) {
  const inicio = document.getElementById("inicioLink")
  const skills = document.getElementById("skillsLink")
  const proyectos = document.getElementById("proyectosLink")
  const contacto = document.getElementById("contactoLink")
  inicio.classList.remove("active")
  skills.classList.remove("active")
  proyectos.classList.remove("active")
  contacto.classList.remove("active")
  const activeLink = document.getElementById(active)
  activeLink.classList.add("active")
}
function navigateHandler(active) {
  toggleHandler()
  activeLinkNavbar(active)
}
addEventListener("scroll", () => {
  const homeHeight = document.getElementById("inicio").clientHeight
  const skillsHeight =
    document.getElementById("skills").clientHeight + homeHeight
  const proyectosHeight =
    document.getElementById("proyectos").clientHeight + skillsHeight
  // const contactoHeight =
  //   document.getElementById("contacto").clientHeight + proyectosHeight
  const scrollable =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight
  const scroll = Math.round(window.scrollY)
  const page =
    scroll === scrollable || scroll > proyectosHeight
      ? 4
      : scroll >= skillsHeight / 1.02 && scroll < proyectosHeight
      ? 3
      : scroll >= homeHeight / 1.3 && scroll < skillsHeight
      ? 2
      : 1
  // const page =
  //   scroll < homeHeight
  //     ? 1
  //     : scroll >= homeHeight && scroll < skillsHeight
  //     ? 2
  //     : scroll >= skillsHeight && scroll < proyectosHeight
  //     ? 3
  //     : 4

  if (page === 1) {
    activeLinkNavbar("inicioLink")
  } else if (page === 2) {
    activeLinkNavbar("skillsLink")
  } else if (page === 3) {
    activeLinkNavbar("proyectosLink")
  } else if (page === 4) {
    activeLinkNavbar("contactoLink")
  }
})
const swiper = new Swiper(".swiper", {
  // Default parameters
  breakpoints: {
    // when window width is >= 500px
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    500: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
  // Optional parameters
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 5000,
    pauseOnMouseEnter: true,
    disableOnInteraction: false,
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>"
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  centeredSlides: true,
})
