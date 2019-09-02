import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    providers: [UserService]
})
export class LoginComponent implements OnInit {

    public title: string;
    public user: User;
    public token: string;
    public identity;
    public status: boolean;

    constructor(
         private _userService: UserService,
         private _router: Router
    ) {
        this.title = "Ingresa";
        this.user = new User("","","","","","");
    }

    ngOnInit() {
        console.log(this.title);
    }

    login(form) {
        this._userService.login(this.user).subscribe(
            response => {
                if(response && response.access_token){
                    this.token = response.access_token;
                    this.identity = response.identity;
                    if(this._userService.persistData(this.token, this.identity)){
                        this._router.navigate(['/usuarios']);
                    }else if(response.message){
                        this.title = response.message;
                    }
                }
            }, error => {
                let errorMessage = <any>error;
                if(errorMessage != null){
                    this.status = true;
                }
                console.log(errorMessage);
            });
    }
}
