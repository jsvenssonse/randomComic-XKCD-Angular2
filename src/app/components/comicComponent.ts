import { Component, OnInit } from '@angular/core';

//Service import 
import {ComicService} from '../services/comicService'


@Component({  
	selector: 'app-comic',
  	templateUrl: '../templates/comicTemplate.html',
  	styleUrls: ['../app.component.css']
})
export class Comic implements OnInit{
	constructor(private comicService: ComicService) {}
	title = 'app works!';
	data = [];
  	getComic(){
  		
    	return this.comicService.getComic()
            .subscribe((resp) => {
                this.data.push(resp)
                
            })
    }

    ngOnInit(){
    	this.getComic();
    	
    }

    showspinner(){
        document.getElementById("spinner").className = "show"; 
    }

    hidespinner(){
        document.getElementById("spinner").className = "hide";
    }

}
