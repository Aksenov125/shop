export type Category = { 
    id:number,
    title:string
}

export type Categories = {
    categories: Category[];
}

export type initialStat = { 
    categories: Category[];
    message: string | undefined
}

export type Item = {
    id:number
    title:string
    img:string
    size:string
}

export type ItemCategory = {
    Items:[]
}
