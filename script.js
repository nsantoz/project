function togglemode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }

  if (html.classList.contains("light")) {
    img.setAttribute("alt", "foto mayk brito de óculos, fundo azul")
  } else {
    img.setAttribute("alt", "foto mayk brito, fundo amarelo")
  }

  /*
  if (html.classList.contains("light"))
  {html.classList.remove("light")}
  else {html.classList.add("light")}*/
}
