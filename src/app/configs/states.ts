import { Component } from '@angular/core';

//Component imports
import { Hello } from '../components/helloComponent';
import { About } from '../components/aboutComponent';
import { Comic } from '../components/comicComponent';
import { ComicRandom } from '../components/randomComponent';
import { BackComic } from '../components/backComponent';

/*
    -->   Information    <--
    
    * This is the "routes" files all states listed

*/

  /** States */

	export let helloState = { name: 'hello', url: '/',  component: Hello }; 
	export let aboutState = { name: 'about', url: '/about',  component: About };
	export let comicState = { name: 'comic', url: '/comic',  component: Comic };
	export let randomcomicState = { name: 'randomcomic', url: '/randomcomic/:id',  component: ComicRandom };
	export let backcomicState = { name: 'backcomic', url: '/backcomic/:id',  component: BackComic };

