import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { Contacts } from './mock-contacts';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class StorageService {
  AllContacts:Contact[]=[];

  constructor(private http: Http) { this.retrieveContacts(); }

  retrieveContacts(): Promise<any> {
    return this.http.get("./resources/resource.json")
     .toPromise()
     .then( response => { this.AllContacts=response.json(); return response.json();  } )
     .catch( error => { console.log(error.json()); return error.json(); } );
  }

  getContacts():Promise<any[]> {
    if(this.AllContacts.length > 0) {
      return Promise.resolve(this.AllContacts);
    }
    else {
      return this.retrieveContacts();
    }
  }
  createContact(contact) {
    console.log('all:',this.AllContacts,"new: ",contact);
    this.AllContacts.push(contact);
  }
}
