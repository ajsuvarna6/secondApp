import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CreateContactComponent }  from "./createContact.component";
import { ContactsComponent } from "./contacts.component";
import { StorageService } from "./storage.service";
import { routing } from './app.routing';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

@NgModule({
  imports: [ BrowserModule, FormsModule, HttpModule, routing ],
  declarations: [ AppComponent, CreateContactComponent, ContactsComponent ],
  providers: [ StorageService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
