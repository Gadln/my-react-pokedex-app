function PokemonCard({ pokemon }) {
  //console.log(pokemon);

  return <figure>
    {pokemon.imgSrc ? (
            <img src={pokemon.imgSrc} alt={pokemon.name} />
          ) : (
            <p>???</p>
          )}
  </figure> ;
}

export default PokemonCard;