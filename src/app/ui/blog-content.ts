import { Component,Input } from '@angular/core';

@Component({
	selector: 'blog-content',
	template: `

			<div>
			{{blog.title}}
			</div>

			<div>
			{{blog.body}}
			</div>

	`
})
export class BlogContent { 
	@Input() blog = {}
}