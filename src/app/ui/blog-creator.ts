import { Component } from '@angular/core';

@Component({
	selector: 'blog-creator',
	template: `
	<div>
		<form>
			<div>
			    <label for ="input"> title </label>
				<input type="text"
				[(ngModel)]= "newBlog.title"
				name="newBlogTitle"
				>
			</div>

		<div>
			<label for ="textarea"> body </label>
			<textarea rows="10" cols="50"
			[(ngModel)]="newBlog.body"
			name="newBlogBody"
			></textarea>
		</div>

		<div>
			<button type="submit">
				done
			</button>
		</div>
		</form>
	</div>

	<br>

	`
})
export class BlogCreator { 
	newBlog ={
		title:'',
		body:''
	}
	
}