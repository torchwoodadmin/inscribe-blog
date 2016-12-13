import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { providers,routes } from './';
import { Main, Blogs,Home } from './containers';
import { BlogContent, BlogCreator, AppBar } from './ui';


@NgModule({
	imports :[ 
	BrowserModule,
	FormsModule,
	HttpModule,
	routes
	],

	declarations: [
	AppComponent, 
	Main, 
	AppBar, 
	Blogs, 
	BlogContent,
	BlogCreator,
	Home
	],
	providers,
	bootstrap :  [ AppComponent ]
})

export class AppModule{}