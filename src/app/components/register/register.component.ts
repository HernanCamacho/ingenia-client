import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    providers: [UserService]
})
export class RegisterComponent implements OnInit {

    public title: string;
    public user: User;
    public token: string;
    public identity;
    public status: boolean;

    constructor(
         private _userService: UserService,
         private _router: Router
    ) {
        this.title = "Aquí puedes registrarte para acceder a los datos :)";
        this.user = new User("","","","","");
    }

    ngOnInit() {
        console.log(this.title);
    }

    register(form) {
        this._userService.register(this.user).subscribe(
            response => {
                if(response && response.data.token){
                    this.token = response.data.token;
                    this.identity = response.data.user;
                    if(this._userService.persistData(this.token, this.identity)){
                        this._router.navigate(['/home']);
                    }else{
                        this.status = true;
                        console.log('Error en la persistencia de datos');
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
