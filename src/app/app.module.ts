import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { providers } from './';
import { Main } from './containers';
import { Blogs } from './containers';
import { AppBar } from './ui';
import { BlogContent } from './ui';
import { BlogCreator } from './ui';


@NgModule({
	imports :    [ BrowserModule,FormsModule,HttpModule ],

	declarations: [
	AppComponent, 
	Main, 
	AppBar, 
	Blogs, 
	BlogContent,
	BlogCreator
	],
	providers,
	bootstrap :  [ AppComponent ]
})

export class AppModule{}