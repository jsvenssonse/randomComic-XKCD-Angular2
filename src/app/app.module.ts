import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//Components
import { AppComponent } from './app.component';
import { Hello } from './components/helloComponent';
import { About } from './components/aboutComponent';

//Extra modules
import { MaterialModule } from '@angular/material';
import { UIRouterModule } from 'ui-router-ng2';

//Configs
import { uiRouterConfigFn } from './configs/router.config';
import { helloState, aboutState } from './configs/states';

//temp imports
import { Component } from '@angular/core'; 



let INITIAL_STATES =  [ helloState, aboutState ];

@NgModule({
  declarations: [
    AppComponent,Hello,About
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    UIRouterModule.forRoot({ states: INITIAL_STATES, useHash: true }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
