import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//Components
import { AppComponent } from './app.component';

//Extra modules
import { MaterialModule } from '@angular/material';
import { UIRouterModule } from "ui-router-ng2";

//temp imports
import { Component } from '@angular/core'; 

@Component({  
  template: '<h3>Hello world!</h3>' 
})
class Hello { }

@Component({ 
  template: '<h3>Its the UI-Router hello world app!</h3>' 
})
class About { }

/** States */

export let helloState = { name: 'hello', url: '/hello',  component: Hello }; 
export let aboutState = { name: 'about', url: '/about',  component: About };


@NgModule({
  declarations: [
    AppComponent,Hello,About
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    //UIRouterModule.forRoot({ states: [ helloState, aboutState ], useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
