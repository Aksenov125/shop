import { categories } from './type';

export const categoriesFetch = async (): Promise<categories> => {
  const res = await fetch('api/categories');
  const data = await res.json();

  return data;
};
