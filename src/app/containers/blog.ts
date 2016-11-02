import { Component } from '@angular/core';
@Component ({
	selector:'blog-container',
	template: `

	<div>
		<blog-creator (createBlog)="onCreateBlog($event)"></blog-creator>
		</div>

	<div>
		<blog-content 
			[blog]="blog"
				*ngFor="let blog of blogs "
			>
			</blog-content>
	             </div>
	`
})
 export class Blogs{
	blogs = [


	];

	onCreateBlog(blog){
		this.blogs.push(blog);
	}
 }