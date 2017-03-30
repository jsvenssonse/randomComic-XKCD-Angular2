import { Component, OnInit } from '@angular/core';

//Service import 
import {ComicService} from '../services/comicService'

/*
    -->     Component Information    <--
    
    *This component get the previus random comic your visitid
    
    -> getLastComic()
        * Get latest comic with delay 1 sec

    -> hidespinner & showspinner()
        * For spinner to show and hide
*/


@Component({  
	selector: 'app-comic',
  	templateUrl: '../templates/comicTemplate.html',
  	styleUrls: ['../app.component.css']
})
export class BackComic implements OnInit{
	constructor(private comicService: ComicService) {}
	data = [];
    loading: boolean; 
    
  	getLastComic(){
    	return this.comicService.getLastComic().delay(1000)
            .subscribe((resp) => {
                this.data.push(resp)
                this.hidespinner()
            })
    }

    ngOnInit(){
    	this.getLastComic();
    	this.showspinner()
    }

    hidespinner(){
        this.loading = false;
        
    }
    showspinner(){
        this.loading = true;
    }
}
