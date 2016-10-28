import { Component } from '@angular/core';
import { AppBar } from '../ui';

@Component ({
	selector:'main-container',
	template: `
		<div>
		<app-bar></app-bar>
			<main class="main">

			<h1>Write your first blog post 😇 </h1>

			<app-editor>

			</app-editor>

			</main>
			
		</div>
			
	`
})
 export class Main{ }