import { useEffect } from "react";

function PokemonCard({ pokemon }) {
  //console.log(pokemon);

useEffect(() => {
  if (pokemon.name === "pikachu") {
    alert("pika pikachu !!!");
  }
}, [pokemon])

  return <figure>
    {pokemon.imgSrc ? (
            <img src={pokemon.imgSrc} alt={pokemon.name} />
          ) : (
            <p>???</p>
          )}
  </figure> ;
}

export default PokemonCard;