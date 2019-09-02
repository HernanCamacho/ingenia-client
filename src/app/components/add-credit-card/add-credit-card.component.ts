import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { CreditCard } from '../../models/credit-card';
import { CreditCardService } from '../../services/credit-card.service';

@Component({
    selector: 'add-credit-card',
    templateUrl: './add-credit-card.component.html',
    providers: [UserService, CreditCardService]
})
export class AddCreditCardComponent implements OnInit {

    public user: User;
    public users: User[];
    public creditCard: CreditCard;
    public loading: boolean;

    constructor(
         private _userService: UserService,
         private _creditCardService: CreditCardService,
         private _router: Router
    ) {
        this.user = new User("","","","","","");
        this.creditCard = new CreditCard("","");
        this.loading = false;
    }

    ngOnInit() {
        this.getUsers();
    }

    register(form) {
        this._creditCardService.store(this.creditCard).subscribe(
            response => {
                if(response){
                    this.loading = true;
                }
            }, error => {
                let errorMessage = <any>error;
                console.log(errorMessage);
            });
    }

    getUsers(){
        this._userService.getAllUsers().subscribe(
            response => {
                if(response){
				    this.users = response;
                }
            }, error => {
                console.log(error);
            }
        )
    }
}
