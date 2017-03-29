import { Component } from '@angular/core';

//Component imports
import { Hello } from '../components/helloComponent';
import { About } from '../components/aboutComponent';


  /** States */

	export let helloState = { name: 'hello', url: '/hello',  component: Hello }; 
	export let aboutState = { name: 'about', url: '/about',  component: About };

