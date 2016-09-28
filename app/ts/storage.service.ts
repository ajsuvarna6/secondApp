import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { Contacts } from './mock-contacts';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class StorageService {
  AllContacts:Contact[]=[];

  constructor(private http: Http) { }

  retrieveContacts(): Promise<Contact[]> {
    this.http.get("./resources/resource.json")
     .toPromise()
     .then( response => { return response.json(); } )
     .catch( error => { return error.json(); } );
  }

  getContacts():Contact[] {
    return Contacts;
  }
  createContact(contact) {
    Contacts.push(contact);
  }
}
