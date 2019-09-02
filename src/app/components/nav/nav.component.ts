import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'navigation',
    templateUrl: './nav.component.html',
    providers: [UserService]
})
export class NavComponent implements OnInit, DoCheck {

    public identity;

    constructor(
        private _userService: UserService,
        private _router: Router
    ){}

    ngOnInit(){
        this.identity = this._userService.getIdentity();
    }

    ngDoCheck(){
        this.identity = this._userService.getIdentity();
    }

    logout(){
        this._userService.logout().subscribe(
            response => {
                this._router.navigate(['/']);
            }, error => {
                let errorMessage = <any>error;
                console.log(errorMessage);
            });
    }
}
