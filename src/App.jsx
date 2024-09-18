import { useState } from "react";
import PokemonCard from "./components/PokemonCard";

const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];


function App() {
  const [pokemonIndex, setPokemonIndex] =  useState(0);
  console.log(pokemonIndex);

const handleLast = () => {
  setPokemonIndex(pokemonIndex -1)
} 

const handleNext = () => {
  setPokemonIndex(pokemonIndex +1)
}

  return (
    <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />

      {/* Displays the "previous" button only if pokemonIndex > 0 */}
      {pokemonIndex > 0 && (
        <button onClick={handleLast}>Précédent</button>
      )}

      {/* Displays the "next" button only if pokemonIndex < pokemonList.length - 1 */}
      {pokemonIndex < pokemonList.length - 1 && (
        <button onClick={handleNext}>Suivant</button>
      )}
    </div>

  )
}

export default App;