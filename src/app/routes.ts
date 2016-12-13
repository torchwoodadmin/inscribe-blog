import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { Main,Blogs,Home } from './containers';

export const routes: ModuleWithProviders = RouterModule.forRoot([ 
	{
		path: '',
		component: Main,
		children: [
		{ path: '' , component: Blogs },
		{ path: 'home', component: Home }
		]
	},
	{ path:'**',redirectTo: '' }
 ])