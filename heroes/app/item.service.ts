import {Item} from './item';
import {ITEMS} from './mock-items';
import {Injectable} from 'angular2/core';
import {HTTP_BINDINGS, Http} from 'angular2/http'

@Injectable( )
export class ItemService {
	getItems () {
		return Promise.resolve(ITEMS);
	}
	
item: Object [ ];
constructor(http:Http)  {
	
}
	
//	getItemsSlowly () {
//		return new Promise<Item[ ]>(resolve => 
//			setTimeout(()=>resolve(ITEMS), 2000)
//		);
//	}
}