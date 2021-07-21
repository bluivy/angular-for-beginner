import { EventEmitter, Output } from '@angular/core';
import {Component, Input} from '@angular/core';
import { UserInterface } from '../types/user.interface';
import {HttpClient} from "@angular/common/http"
import { Observable } from 'rxjs';

@Component({
    selector: 'app-users-list',
    templateUrl:'./usersList.component.html',
    styleUrls:['./usersList.component.css']
})

export class UsersListComponent
{
    heroesUrl ="http://localhost:3000"
    @Input()
    users: { id: string; name: string; iq: number; }[] = [];
    @Output() removeUser = new EventEmitter();
    @Output() addUserEvent = new EventEmitter();
    constructor(private http : HttpClient){}
    newUserName : string = '';
    newUserIq : number = 0;
    inter_record :any = [];
    temp_var : UserInterface[]=[];
    testUser = ['Jack','paige','walter']
    
    

    
    
    setNewUserName(event : any ):void
    {
        const target = event.target;
        console.log('setNewUserName',target.value)
        this.newUserName = target.value;

    }
    /** Doesnt not work  */
    setNewIq(event : any):void
    {
        const t = event.target;
        console.log('setNewIq', t.value);
        this.newUserIq = t.value;
    }
    /** Applies to the testUser Array based on the hero angular cli tutorial */
    /**
    addUser(usr : string) : void
    { 
        if(usr)
        {
            this.testUser.push(usr);
        }
    }
  */
   addUser() : void
   {
       this.addUserEvent.emit(this.newUserName)
       this.newUserName = ""

   }
   fetchData (event : any) : void
   {
    
    let t = event.target;
    let id = t.value;
    console.log(id)
    let endPoints = "/users/" + id;
    this.http.get(this.heroesUrl + endPoints).subscribe((data : any) =>
     
   {  this.temp_var = data;
       console.log(this.temp_var)
    });
   }
  
} 
