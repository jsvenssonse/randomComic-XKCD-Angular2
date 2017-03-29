import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//Extra modules
import { MaterialModule } from '@angular/material';
import { UIRouterModule } from 'ui-router-ng2';
import 'hammerjs';

//Components
import { AppComponent } from './app.component';
import { Hello } from './components/helloComponent';
import { About } from './components/aboutComponent';
import { Comic } from './components/comicComponent';
import { ComicRandom } from './components/randomComponent';
import { BackComic } from './components/backComponent';

//Services
import {ComicService} from './services/comicService'

//Configs
import { uiRouterConfigFn } from './configs/router.config';
import { helloState, aboutState, comicState, randomcomicState, backcomicState } from './configs/states';

let INITIAL_STATES =  [ helloState, aboutState, comicState, randomcomicState, backcomicState ];

@NgModule({
  declarations: [
    AppComponent, Hello, About, Comic, ComicRandom, BackComic,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    UIRouterModule.forRoot({ states: INITIAL_STATES, useHash: true }),
  ],
  providers: [ComicService],
  bootstrap: [AppComponent]
})

export class AppModule { }
