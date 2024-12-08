import {  Category } from './type';

export const categoriesFetch = async (): Promise<Category[]> => {
  const res = await fetch('/api/categories');
  
  const data = await res.json();

  return data.categories;
};
