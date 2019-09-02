import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './components/users/users.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CreditCardsComponent } from './components/credit-cards/credit-cards.component';
import { UserGuard } from './services/guard';
const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'registro', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'usuarios', component: UsersComponent, canActivate: [UserGuard]},
    {path: 'usuarios/:page', component: UsersComponent, canActivate: [UserGuard]},
    {path: 'tarjetas', component: CreditCardsComponent, canActivate: [UserGuard]},
    {path: 'tarjetas/:page', component: CreditCardsComponent, canActivate: [UserGuard]},
    {path: '*', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
