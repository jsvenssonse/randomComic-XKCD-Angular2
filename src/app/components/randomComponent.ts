import { Component, OnInit } from '@angular/core';

//Service import 
import {ComicService} from '../services/comicService';

import 'rxjs/Rx'; 


/*
    -->     Component Information    <--
    
    * This component get random comic from XDCD

    -> getRandomComic()
        * Get random comic with delay 1 sec
    
    -> hidespinner & showspinner()
        * For spinner to show


*/

@Component({  
    selector: 'app-comic',
      templateUrl: '../templates/comicTemplate.html',
      styleUrls: ['../app.component.css']
})

export class ComicRandom implements OnInit{
	constructor(private comicService: ComicService) {}
	title = 'app works!';
	data = [];
    loading: boolean; 

    getRandomComic(){
            return this.comicService.getRadomComic().delay(1000)
            .subscribe((resp) => {
                this.data.push(resp) 
                this.hidespinner()
            })
    }

    hidespinner(){
        this.loading = false;
        
    }
    showspinner(){
        this.loading = true;
    }

    ngOnInit(){
        this.showspinner()
        this.getRandomComic();
    }    
                
}
