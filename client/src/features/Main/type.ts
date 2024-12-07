export type Category = { 
    id:number,
    title:string
}

export type Categories = {
    categories: Category[];
}

export type initialState = { 
    categories:Categories| null
}
