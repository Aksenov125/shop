export type User = {
    id:number
    username:string
    email:string
    password:string
    rpassword:string
}

export type UserLog = {
    email:string
    password:string
}


export type RegUser = {
    username:string
    email:string
    password:string
    rpassword:string
}

export type UserAndId = User & {id : number}
export type UserId = {id:number}





export type StateAuth = {
user:User | null | UserAndId
message: string | undefined
}