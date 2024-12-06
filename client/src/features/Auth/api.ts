import { RegUser, User } from "./type";

export const registarationFetch = async(obj:RegUser): Promise<User> => {
    const res = await fetch ('api/auth/registration', {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(obj)
    });
    const data = await res.json();
    console.log(data);
    
    return data
}