import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { DocumentsComponent } from './documents/documents.component';
import { ProposalListComponent } from './proposal/proposal-list.component';


const routes: Routes = [ //routes is a type of variable
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'proposals', component: ProposalListComponent },
    { path: 'home', component: HomepageComponent },
    { path: 'documents', component: DocumentsComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }