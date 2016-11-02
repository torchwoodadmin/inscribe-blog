import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { Main } from './containers';
import { Blogs } from './containers';
import { AppBar } from './ui';
import { BlogContent } from './ui';
import { BlogCreator } from './ui';


@NgModule({
	imports :    [ BrowserModule,FormsModule ],

	declarations: [
	AppComponent, 
	Main, 
	AppBar, 
	Blogs, 
	BlogContent,
	BlogCreator
	],
	
	bootstrap :  [ AppComponent ]
})

export class AppModule{}