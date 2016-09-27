import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateContactComponent }  from "./createContact.component";
import { ContactsComponent } from "./contacts.component";

const appRoutes: Routes = [
  {
    path: 'create',
    component: CreateContactComponent
  },
  {
    path: 'contacts',
    component: ContactsComponent
  },
  {
    path: '',
    redirectTo: '/contacts',
    pathMatch: 'full'
  }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
