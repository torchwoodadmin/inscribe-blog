import { Component } from '@angular/core';
import { AppBar } from '../ui';

@Component ({
	selector:'main-container',
	template: `
		<div>
		<app-bar></app-bar>
			<main>
			<h1>Write your first blog post 😇 </h1>
			<router-outlet></router-outlet>
			</main>
		</div>
			
	`
})
 export class Main{ }