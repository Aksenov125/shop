import {  Category } from './type';

export const categoriesFetch = async (): Promise<Category[]> => {
  const res = await fetch('/api/categories');
  
  const data = await res.json();

  return data.categories;
};


  export const fetchRemoveCategory = async(id:Category['id']): Promise<{ message: string; id: number }> => {
    const res = await fetch (`api/categories/delete/${id}`, {
        method: 'DELETE',
        headers: {'Content-Type' : 'application/json'},
    });
    const data = await res.json();
    
    return data.categories

}
export const featchCreateCategory = async(title:Category['title']): Promise<Category> => {
    const res = await fetch (`api/categories/addCategory`, {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(title)
    });
    const data = await res.json();
    console.log(data)
    return data.category

}