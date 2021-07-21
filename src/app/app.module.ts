import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersServices } from './services/users.service';
import { UserListModule } from './usersList/usersList.module';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,AppRoutingModule,UserListModule,HttpClientModule],
  providers: [UsersServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
