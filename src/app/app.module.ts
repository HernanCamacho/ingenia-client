import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Http
import { HttpClientModule } from '@angular/common/http';

// Forms
import { FormsModule } from '@angular/forms';

import { UsersComponent } from './components/users/users.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CreditCardsComponent } from './components/credit-cards/credit-cards.component';
import { NavComponent } from './components/nav/nav.component';
import { AddCreditCardComponent } from './components/add-credit-card/add-credit-card.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    CreditCardsComponent,
    NavComponent,
    AddCreditCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
