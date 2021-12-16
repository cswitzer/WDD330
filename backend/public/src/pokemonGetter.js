const Pokedex = require("pokeapi-js-wrapper")
const P = new Pokedex.Pokedex()

// Retrieve 20 pokemon at a time
const interval = {
  offset: 0,
  limit: 12,
}

class PokemonGetter {
  constructor() {
    this.pokemonList = []
    this.pokeContainer = document.querySelector(".poke-container")
  }

  async getTwelvePokemon() {
    const { results } = await P.getPokemonsList(interval)
    results.forEach((pokemon) => this.pokemonList.push(pokemon))

    // populate html page with pokemon
    this.populatePokeContainer()

    // prepare the next 10 pokemon to be displayed if the user wants
    interval.offset += 12
    interval.limit += 12
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

    let pokeCard = document.createElement("div")
    pokeCard.classList.add("pokecard")

    // testing code
    pokeCard.appendChild(document.createTextNode(name))
    this.pokeContainer.appendChild(pokeCard)
  }

  async getPokemon(name) {
    const pokemon = await P.getPokemonByName(name)
    return pokemon
  }
}

// use the class to perform useful tasks
const pokemonGetter = new PokemonGetter()
pokemonGetter.getTwelvePokemon()

module.exports = PokemonGetter
