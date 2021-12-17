const Pokedex = require("pokeapi-js-wrapper")
const P = new Pokedex.Pokedex()

const colors = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
}

class PokemonGetter {
  constructor() {
    this.pokemonList = []
    this.pokeContainer = document.querySelector(".poke-container")
    // retrieve 12 pokemon at a time
    this.interval = {
      offset: 0,
      limit: 8,
    }
  }

  async getTwelvePokemon() {
    console.log("offset: " + this.interval.offset)
    console.log("limit: " + this.interval.limit)

    const { results } = await P.getPokemonsList(this.interval)
    results.forEach((pokemon) => this.pokemonList.push(pokemon))

    this.populatePokeContainer()

    // clear the array so we don't populate the same pokemon twice next time
    this.pokemonList = []

    // prepare the next 12 pokemon to be displayed if the user wants
    this.interval.offset += 8
  }

  populatePokeContainer() {
    // make sure this code only runs on the homepage and nowhere else
    if (this.pokeContainer) {
      this.pokemonList.forEach((pokemon) => this.insertPokeCard(pokemon))
    } else {
      console.log("Not currently on the home page.")
    }
  }

  async insertPokeCard(pokemon) {
    // first, retrieve all relevant data about the pokemon
    const name = pokemon.name
    const pokeData = await this.getPokemon(name)

    // create and render pokecard
    let pokeCard = document.createElement("div")
    pokeCard.classList.add("pokecard")
    // console.log(pokeData)
    this.renderCardHTML(pokeCard, name, pokeData)

    this.pokeContainer.appendChild(pokeCard)
  }

  async getPokemon(name) {
    const pokemon = await P.getPokemonByName(name)
    return pokemon
  }

  renderCardHTML(pokeCard, name, pokeData) {
    const capName = name[0].toUpperCase() + name.slice(1)
    const types = pokeData.types
    const pokeID = pokeData.id // needed for the photo
    const pokeImg =
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
      pokeID +
      ".png"

    pokeCard.innerHTML = `
      <div class="img-container">
        <img src=${pokeImg} alt="picture of ${capName}" class="poke-img" />
      </div>
      <h3>${capName}</h3>
      <div class="types">
        <span class="type">${types[0].type.name}</span>
        ${
          types.length > 1
            ? `<span class="type">${types[1].type.name}</span>`
            : ""
        }
      </div>
    `

    // color in each pokemon's type according to type
    const typeSpan = pokeCard.querySelectorAll(".type")
    console.log(typeSpan)
    typeSpan.forEach(
      (type) => (type.style.backgroundColor = colors[type.textContent])
    )
  }
}

// use the class to perform useful tasks
const pokemonGetter = new PokemonGetter()
pokemonGetter.getTwelvePokemon()

// add event listener to load more pokemon if user desires
if (document.querySelector(".poke-container")) {
  const loadPokemonBtn = document.getElementById("load-more-btn")
  loadPokemonBtn.addEventListener("click", () => {
    pokemonGetter.getTwelvePokemon()
  })
}

module.exports = PokemonGetter
