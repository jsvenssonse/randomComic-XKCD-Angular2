import { Component, OnInit } from '@angular/core';

//Service import 
import {ComicService} from '../services/comicService'

/*
    -->     Component Information    <--
    
    * This component get the latets comic from XDCD
    
    -> getComic()
        * Get latetst comic with delay 1 sec

    -> hidespinner & showspinner()
        * For spinner to show and hide

*/

@Component({  
	selector: 'app-comic',
  	templateUrl: '../templates/comicTemplate.html',
  	styleUrls: ['../app.component.css']
})
export class Comic implements OnInit{
	constructor(private comicService: ComicService) {}
	title = 'app works!';
	data = [];
    loading: boolean; 

  	getComic(){
  		
    	return this.comicService.getComic().delay(1000)
            .subscribe((resp) => {
                this.data.push(resp)
                this.hidespinner()
            })
    }

    ngOnInit(){
        this.showspinner()
    	this.getComic();
    }

    hidespinner(){
        this.loading = false;
        
    }
    showspinner(){
        this.loading = true;
    }


}
