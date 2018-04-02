import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NavbarModule } from './navbar/navbar.module'
import { UsersModule } from './users/users.module'
import { LoginModule } from './login/login.module'

import { AppComponent } from './app.component'

import { AppRouter } from './app.router'

import { AuthGuard } from './core/auth.gard'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NavbarModule,
    UsersModule,
    LoginModule,
    AppRouter
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
