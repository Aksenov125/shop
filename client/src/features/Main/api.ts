import { Categories } from './type';

export const categoriesFetch = async (): Promise<Categories> => {
  const res = await fetch('/api/categories');
  
  const data = await res.json();
  console.log(data, '123123123123');

  return data;
};
