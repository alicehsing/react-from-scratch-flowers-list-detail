import { client, checkError } from './client';

export async function getPokemons(from = 0, to = 25) {
  const response = await client
    .from('pokemon')
    .select()
    .range(from, to);
  
  return checkError(response);
}

export async function getSinglePokemon(id) {
  const response = await client
    .from('pokemon')
    .select()
    .match({ id })
    .single();

  return checkError(response);
}