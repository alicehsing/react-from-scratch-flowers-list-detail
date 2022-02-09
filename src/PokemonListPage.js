import React, { useEffect, useState } from 'react';
import './App.css';
import PokemonsList from './PokemonsList';
import { getPokemons } from './services/fetch-utils';



export default function PokemonsPage() {
  const [pokemons, setPokemons] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 25;
  const [currentQuery, setCurrentQuery] = useState('');
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  
  useEffect(() => {
    async function fetch() {
      const from = perPage * (currentPage - 1) + 1;
      const to = perPage * currentPage;
      const pokemons = await getPokemons(from, to);

      setPokemons(pokemons);
    }
    fetch();
  }, [currentPage]);

  //STRETCH: FILTER/SEARCH BAR
  useEffect(() => {
    const tempFilter = pokemons.filter(pokemon => pokemon.pokemon.includes(currentQuery));
    setFilteredPokemon(tempFilter);
  }, [currentQuery, pokemons]);

  return (
    <div className='pokemons-list-page'>
      <div className='search'>
        <input value={currentQuery} placeholder='Search Pokemon' type='text' onChange={ e => setCurrentQuery(e.target.value)}/>
      </div>
      <h3>Current Page: {currentPage}</h3>
      <button onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}>Previous Page</button>
      <button onClick={() => setCurrentPage(currentPage + 1)}
        disabled={pokemons.length < perPage}>Next Page</button>
      <div>
        <PokemonsList pokemons={

          //STRETCH: FILTER/SEARCH BAR
          filteredPokemon.length
            ? filteredPokemon
            : pokemons
        } />
      </div>
    </div>
  );
}
