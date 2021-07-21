import { NgModule }  from "@angular/core";
import {CommonModule} from "@angular/common";
import {UsersListComponent} from "src/app/usersList/usersList.component";
import {HttpClientModule} from '@angular/common/http'
import {HttpClient} from '@angular/common/http'
@NgModule({
 imports : [CommonModule],
    declarations:[UsersListComponent],
    exports:[UsersListComponent]
})
export class UserListModule {}