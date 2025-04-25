import { Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { LeadsCrudComponent } from './views/leads-crud/leads-crud.component';
import { LeadCreateComponent } from './components/lead/lead-create/lead-create.component';
import { LeadListComponent } from './components/lead/lead-list/lead-list.component';
import { LeadReadComponent } from './components/lead/lead-read/lead-read.component';

export const routes: Routes = [{
    path: "home", 
    component: HomeComponent

},{
    path: "leads",
    component: LeadListComponent
},{
    path: "leads/create",
    component: LeadCreateComponent
},{
    path: "read",
    component: LeadReadComponent
}];
