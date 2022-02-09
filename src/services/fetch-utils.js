import { client, checkError } from './client';

export async function getPokemons(from = 0, to = 24) {
  const response = await client
    .from('pokemon')
    .select()
    .range(from, to);
  console.log(response);
  return checkError(response);
}

// export async function getSingleFlower(id) {
//   const response = await client
//     .from('flowers')
//     .select()
//     .match({ id })
//     .single();
//   console.log(response);
//   return checkError(response);
// }