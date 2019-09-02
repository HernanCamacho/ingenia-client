import { Component, OnInit, DoCheck } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'navigation',
    templateUrl: './nav.component.html',
    providers: [UserService]
})
export class NavComponent implements OnInit, DoCheck {

    public identity;

    constructor(
        private _userService: UserService
    ){
    }

    ngOnInit(){
        this.identity = this._userService.getIdentity();
        console.log(this.identity);
    }

    ngDoCheck(){
        this.identity = this._userService.getIdentity();
        console.log(this.identity);
    }
}
