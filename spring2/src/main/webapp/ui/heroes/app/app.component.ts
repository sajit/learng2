import {Component, OnInit} from 'angular2/core'; 			
import {Item}	from './item';
import {ItemDetailComponent} from './item-detail.component';
import {ItemService} from './item.service';

@Component({ 
		selector: 'my-app', 
		template: `
			<h1>My items</h1>
			<h2> for<br> {{title}}</h2>
			<ul class="items">
				<li *ngFor="#item of items" 
					[class.selected]="item === selectedItem"  
					(click)="onselect(item)">
				 <span class="badge">{{item.id}}</span>{{item.name}}
				</li>
			</ul>
			<item-detail   [item]="selectedItem"></item-detail>
					`,
	  styles: [`
		.selected { 
			background-color: #CFD8DC !important; 
			color: white; 
		  } 	
		.items { 
			margin: 0 0 2em 0; 
			list-style-type: none; 
			padding: 0; 
			width: 10em; 
			} 	
		.items li { 
			cursor: pointer; 
			position: relative; 
			left: 0; 
			background-color: #EEE; 
			margin: .5em; 
			padding: .3em 0em; 
			height: 1.6em; 
			border-radius: 4px; 
		} 	
		.items li.selected:hover { 
			color: white; 
		} 	
		.items li:hover { 
			color: #607D8B; 
			background-color: #EEE; 
			left: .1em; 
		} 
		.items .text { 
			position: relative; 
			top: -3px; 
		} 
		.items .badge { 
			display: inline-block; 
			font-size: small; 
			color: white; 
			padding: 0.8em 0.7em 0em 0.7em; 
			background-color: #607D8B; 
			line-height: 1em; 
			position: relative; 
			left: -1px; 
			top: -4px; 
			height: 1.8em; 
			margin-right: .8em; 
			border-radius: 4px 0px 0px 4px; 
		}
		`],	
		directives: [ItemDetailComponent],
		providers: [ItemService, HTTP_PROVIDERS]
}) 
export class AppComponent implements OnInit { 
		public title = '@mlkingh angular2';
		public items: Item[ ];
		public selectedItem: Item;		
		
		constructor(private _itemService: ItemService) { }
		
		getItems( ) {
			this._itemService.getItems( ).then(items => this.items = items);
		}
		
		ngOnInit() {
			this.getItems();
		}
		
		onselect(item: Item) {this.selectedItem = item; }
}		


		