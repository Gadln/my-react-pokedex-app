function NavBar({ pokemonList, setPokemonIndex }) {
  return (
    <div>
      <ul>
        {pokemonList.map((pokemon, index) => (
          <button 
            key={index}   
            onClick={() => setPokemonIndex(index)}>
            {pokemon.name}
          </button>
        ))}
      </ul>
    </div>
  )
}

export default NavBar;