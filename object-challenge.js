let pokeOne = {
    species: "Charmander",
    pokemon_type: "Fire"
}

let pokeTwo = {
    species: "Magikarp",
    pokemon_type: "Water"
}

let pokeTwo = {
    species: "Magikarp",
    pokemon_type: "Water",
    stringer: function() {
        return `${this.species} is a ${this.pokemon_type} pokemon` 
    }
}
//Write a function called describePokemon() that take an object like the ones above and uses destructuring to return a description of the Pokemon.

// function needs to take in (object) as an argument
const describePokemon = (obj) => {
    // variable declartion object destructure species, pokemon_type from the object
    const { species, pokemon_type} = obj
    // return string interporlation using the values species and pokemon_type with the words "is a"
    return `${species} is a ${pokemon_type} pokemon`
}

console.log(describePokemon(pokeOne))
// --> "Charmander is a Fire pokemon"
console.log(pokeTwo.stringer())
// --> "Magikarp is a Water pokemon"