import { OnInit, Inject } from '@angular/core';
import { Http } from '@angular/http';

// Import RxJs methods
import 'rxjs/add/operator/map';


export class ComicService {   
	constructor(@Inject(Http) public http: Http) {  }
	array=[];



	getComic() {
        return this.http.get('http://xkcd.com/info.0.json')
        	.map(resp =>  resp.json());
    }
    
    getRadomComic() {
    	let number = Math.floor(Math.random()*1816);
    	    this.array.push(number);
    	    console.log(this.array)
        return this.http.get('http://xkcd.com/' +number +'/info.0.json')
        	.map(resp =>  resp.json());
    }

     getLastComic() {
    	console.log(this.array)
    	let length  = this.array.length - 2;
    	let id = this.array[length];
        return this.http.get('http://xkcd.com/' +id +'/info.0.json')
        	.map(resp =>  resp.json());
    }
}