import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'users',
    templateUrl: './users.component.html',
    providers: [UserService]
})
export class UsersComponent implements OnInit {

    public users: User[];
    public title: string;
    public page;
    public next_page;
    public pre_page;
    public total;
    public pages;

    constructor(
        private _userService: UserService,
        private _route:ActivatedRoute,
		private _router: Router
    ){
        this.title = "Estos usuarios usan nuestra aplicación";
    }

    ngOnInit(){
        this.actualPage();
    }

    actualPage(){
		this._route.params.subscribe(params =>{
			let page = +params['page'];
			this.page = page;

			if(!params['page']){
				page = 1;
			}
			if(!page){
				page = 1;
			}else{
				this.next_page = page + 1;
				this.pre_page = page - 1;

				if(this.pre_page <= 0){
					this.pre_page = 1;
				}
			}
			this.getUsers(page);
		});
	}

    getUsers(page){
        this._userService.getUsers(page).subscribe(
            response => {
                if(response){
                    this.total = response.total;
				    this.users = response.data;
				    this.pages = response.last_page;
                    if(page > this.pages){
                        this._router.navigate(['/usuarios', 1]);
				    }
                }
            }, error => {
                console.log(error);
            }
        )
    }
}
