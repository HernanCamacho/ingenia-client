import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './components/users/users.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CreditCardsComponent } from './components/credit-cards/credit-cards.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'registro', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'usuarios', component: UsersComponent},
    {path: 'tarjetas', component: CreditCardsComponent},
    { path: 'usuarios/:page', component: UsersComponent},
    {path: '*', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
