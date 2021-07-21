import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http"
import { UserInterface } from "../types/user.interface";
import { Observable } from "rxjs";



@Injectable()

export class UsersServices {
    heroesUrl = "http://localhost:3000";
    constructor(private http : HttpClient){}
    getUsers() :  Observable<UserInterface[]>
    {
        return this.http.get<UserInterface[]>("http://localhost:3000")
        
    }

    removeUser(id: string) : Observable<{}>
    {
        
        return this.http.delete(` http://localhost:3000/users/${id}`);
    }
    
    addUser(name : string) : any
    {
        const temp_val =
        {
            name,
            iq : 125,
            

        }
        return this.http.post('http://localhost:3000/users',temp_val);
    }
}