const container = document.querySelector(".container")
const pokemonImg = document.createElement("img")
const pokemonChoice = document.getElementById("pokemon")
const submitButton = document.getElementById("submit-button")
container.appendChild(pokemonImg)

submitButton.addEventListener("click", (e) => {
  const pokemon = String(pokemonChoice.value).toLowerCase()
  if (pokemon) {
    retrieveSprite(pokemon)
  }
})

function retrieveSprite(pokemon) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`, {
    method: "GET",
    mode: "cors",
  })
    .then((response) => response.json())
    .then((data) => pokemonImg.setAttribute("src", data.sprites.front_default))
    .catch((error) =>
      pokemonImg.setAttribute("src", "./img/missingno_96x96.jpg")
    )
}
