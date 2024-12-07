export type category = { 
id:number,
title:Text
}
export type categories = { 
    categories: category[];
    }

    export type initial = { 
        categories:categories| null
        }
