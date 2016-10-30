import { Component } from '@angular/core';
@Component ({
	selector:'blog-container',
	template: `
	<div>
		<blog-content [blog]="blog">
			</blog-content>
	             </div>
	`
})
 export class Blog{
 	blog = {title:'first blog post',body:'blog content here'}
 }