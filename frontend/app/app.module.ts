import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';

import { HomepageComponent } from './homepage/homepage.component';
import { DocumentsComponent } from './documents/documents.component';
import { ProposalListComponent } from './proposal/proposal-list.component';
import { ProposalNewComponent } from './proposal/proposal-new.component';
import { ProposalShowComponent } from './proposal/proposal-show.component';
import { HttpModule } from '@angular/http';
import { ContactNewComponent } from './contact/contact-new.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
	imports: [  //node_modules imports
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		NgbModule.forRoot(), // .forRoot() indicate the bootstrap will be available to the root of the application
	    HttpModule
	],
	declarations: [ //created components
		AppComponent,
		HomepageComponent,
		DocumentsComponent,
		ProposalListComponent,
		ProposalNewComponent,
		ProposalShowComponent,
		ContactNewComponent
	],
	providers:[
		DocumentService
	],
	bootstrap: [
		AppComponent
	]
})

export class AppModule { }

