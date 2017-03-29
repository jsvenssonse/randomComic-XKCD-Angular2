import { Component, OnInit } from '@angular/core';

//Service import 
import {ComicService} from '../services/comicService'



@Component({  
	selector: 'app-comic',
  	templateUrl: '../templates/comicTemplate.html',
  	styleUrls: ['../app.component.css']
})
export class BackComic implements OnInit{
	constructor(private comicService: ComicService) {}
	data = [];

  	getLastComic(){
    	return this.comicService.getLastComic()
            .subscribe((resp) => {
                this.data.push(resp)
            })
    }

    ngOnInit(){
    	this.getLastComic();
    	
    }
}
