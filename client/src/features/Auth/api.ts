import { RegUser, User, UserLog } from "./type";

export const registarationFetch = async(obj:RegUser): Promise<User> => {
    const res = await fetch ('api/auth/registration', {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(obj)
    });
    const data = await res.json();
    
    return data.user

}
export const checkUserFetch = async(): Promise<User> => {
    const res = await fetch ('api/auth/check');
    console.log(res);

    if (res.ok) {

        const data = await res.json();
        console.log(data);
        
        
        return data.user
    }
    const {message} = await res.json();
    throw message
}

export const logoutFetch = async (): Promise<{message:string}> => {
    const res = await fetch ('/api/auth/logout')
    const data: {message:string} = (await res.json()) as {message:string}
return data
}

export const loginFetch = async (obj:UserLog): Promise<User> => {
    const res = await fetch ('api/auth/authorization', {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(obj)
    })
    if(res.ok) {
        const data = await res.json()
        return data.user
    }
    const {message} = await res.json()
    throw message
}