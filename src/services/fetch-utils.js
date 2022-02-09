import { client, checkError } from './client';

export async function getFlowers(from = 0, to = 6) {
  const response = await client
    .from('flowers')
    .select
    .range(from, to);
  console.log(response);
  return checkError(response);
}

export async function getSingleFlower(productId) {
  const response = await client
    .from('flowers')
    .select()
    .match({ productId })
    .single();
  return checkError(response);
}