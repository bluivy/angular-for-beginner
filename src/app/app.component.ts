import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { UsersServices } from './services/users.service';
import { UserInterface } from './types/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http : HttpClient, private userService : UsersServices) {}
 
  users : UserInterface[] = 
    [
        {
            'id':'1',
            'name':"Walter O'brien",
            'iq':197
        },
        {
            'id':'2',
            'name':"Sylvester Dodd",
            'iq':189
        },
        {
            'id':'3',
            'name':"Happy Quinn",
            'iq':170
        },
        {
            'id':'4',
            'name':"Toby Curtis",
            'iq':160
        },
        
        {
            'id':'6',
            'name':"Cabe Gallo",
            'iq':135
        },
        {
            'id':'7',
            'name':"Ralph Dineen",
            'iq':200
        }
    ] 
   
    removeUser(id:string):void
    {
       this.userService.removeUser(id).subscribe(() =>{
         console.log("deleted from the backend")
         //this.users = this.users.filter(user =>user.id!=id);
       })
        
    }
    addUser(name : string) :void 
   {
      console.log("addUser a parent method")
      //const uniqueId = Math.random().toString();
      //const newUser : UserInterface = {
          //id : uniqueId,
          //name,
          //iq : 125
      //}
      this.userService.addUser(name).subscribe((newUser: UserInterface) =>{
        this.users.push(newUser);

      })
    }
   ngOnInit() : void {
    console.log("ngOnInit method")
    this.userService.getUsers().subscribe((users : UserInterface[])=>{
      console.log('res',users)
      this.users = users;
    })
   }
      
      
      
   
}
