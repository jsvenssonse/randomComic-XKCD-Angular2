import { Component, OnInit } from '@angular/core';

//Service import 
import {ComicService} from '../services/comicService';


@Component({  
    selector: 'app-comic',
      templateUrl: '../templates/comicTemplate.html',
      styleUrls: ['../app.component.css']
})

export class ComicRandom implements OnInit{
	constructor(private comicService: ComicService) {}
	title = 'app works!';
	data = [];

    getRandomComic(){
    	return this.comicService.getRadomComic()
            .subscribe((resp) => {
                this.data.push(resp) 
            })
    }
    ngOnInit(){
    	this.getRandomComic();
    }
}
