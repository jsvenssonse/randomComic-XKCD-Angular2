import { Component, Inject, OnInit } from '@angular/core';

import {ComicService} from './services/comicService'

// Import RxJs methods
import 'rxjs/add/operator/map';

/*
    -->     Component Information    <--
    
    * This is the main component for display

*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
	constructor(private comicService: ComicService) {}



    ngOnInit(){

    }
}
