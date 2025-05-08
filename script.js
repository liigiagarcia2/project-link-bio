function toggleMode() {
  const html = document.documentElement
  //  if (html.classList.contains("light")) {
  //    html.classList.remove("light")
  //  } else {
  //    html.classList.add("light")
  //  }
  html.classList.toggle("light")

  // pegar a imagem
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, substituir pela img light
    img.setAttribute("src", "./assets/assets/avatar-light.png")
  } else {
    // se for dark mode, manter a img
    img.setAttribute("src", "./assets/assets/avatar.png")
  }
}
