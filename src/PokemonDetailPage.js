import React from 'react';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom/cjs/react-router-dom.min';
import { getSinglePokemon } from './services/fetch-utils';


export default function PokemonDetailPage() {
  const [pokemon, setPokemon] = useState({});
  //get the route param using the useParam react router hook
  const params = useParams();

  //load a particular pokemon from supabase table
  useEffect(() => {
    async function onLoadFetch() {
      const data = await getSinglePokemon(params.id);
      setPokemon(data);
    }
    onLoadFetch();
  }, [params.id]); //we want the id from the url in the dependency array because we want the useEffect callback to get called every time the url changes

  //on click of the pokemon, takes you to official fan site
  function handlePokemonClick() {
    window.open(pokemon.pokedex);
  }
  return (
    <>
      <Link to='/'>Home</Link>
      <div className='pokemon-detail' style={{ backgroundColor: pokemon.color_1 }} onClick={handlePokemonClick}>
        <h2>{pokemon.pokemon}</h2>
        <p>Height: {pokemon.height} / Weight: {pokemon.weight}</p>
        <p>Ability: {pokemon.ability_1}</p>
        <p>Attack: {pokemon.attack} / Defense {pokemon.defense}</p>
        <p>HP: {pokemon.hp}</p>
        <p>Speed: {pokemon.speed}</p>
        <p>Egg Group: {pokemon.egg_group_1}</p>
        <p>Shape: {pokemon.shape}</p>
        <img src={pokemon.url_image} />
      </div></>
  );
}