function NavBar({ pokemonIndex, setPokemonIndex, pokemonListLength }) {

  const handleLast = () => {
  setPokemonIndex(pokemonIndex -1)
} 

const handleNext = () => {
  setPokemonIndex(pokemonIndex +1)
}
  return <div>
      {/* Displays the "previous" button only if pokemonIndex > 0 */}
      {pokemonIndex > 0 && (
        <button onClick={handleLast}>Précédent</button>
      )}

      {/* Displays the "next" button only if pokemonIndex < pokemonList.length - 1 */}
      {pokemonIndex < pokemonListLength - 1 && (
        <button onClick={handleNext}>Suivant</button>
      )}
  </div>
}

export default NavBar;