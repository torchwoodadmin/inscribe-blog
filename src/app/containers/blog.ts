import { Component } from '@angular/core';
import { BlogService } from '../services';
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
	blogs = [];

	constructor(private blogService: BlogService) {
		this.blogService.getBlogs()
			.subscribe(resp => this.blogs = resp.data);
	}


	onCreateBlog(blog){
		this.blogService.createBlog(blog)
			.subscribe(note => this.blogs.push(blog));
	}
 }