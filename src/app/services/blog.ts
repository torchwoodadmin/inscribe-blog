import { Injectable } from '@angular/core';
import { ApiService } from './api';

export class BlogService {
	path: string = '/blog';
	constructor(private api: ApiService) {}

	createBlog(blog) {
		return this.api.post(this.path, blog);
	}

	getBlogs() {
		return this.api.get(this.path);
	}

	completeBlog(blog) {
		return this.api.delete(`${this.path}/${blog.id}`);
	}
}