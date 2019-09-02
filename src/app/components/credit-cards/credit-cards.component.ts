import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CreditCard } from '../../models/credit-card';
import { CreditCardService } from '../../services/credit-card.service';
@Component({
    selector: 'credit-cards',
    templateUrl: './credit-cards.component.html',
    providers: [CreditCardService]
})
export class CreditCardsComponent implements OnInit {

    public creditCards: CreditCard[];
    public title: string;
    public page;
    public next_page;
    public pre_page;
    public total;
    public pages;

    constructor(
        private _creditCardService: CreditCardService,
        private _route:ActivatedRoute,
		private _router: Router
    ){
        this.title = "Estos son las tarjetas registradas en nuestra aplicación";
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
			this.getCreditCards(page);
		});
	}

    getCreditCards(page){
        this._creditCardService.getCreditCards(page).subscribe(
            response => {
                if(response){
                    this.total = response.total;
				    this.creditCards = response.data;
				    this.pages = response.last_page;
                    if(page > this.pages){
                        this._router.navigate(['/tarjetas', 1]);
				    }
                }
            }, error => {
                console.log(error);
            }
        )
    }
}
