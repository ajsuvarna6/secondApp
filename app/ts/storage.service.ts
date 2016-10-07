import { Injectable }     from '@angular/core';
import { Contact }        from './contact';
import { Contacts }       from './mock-contacts';
import { Headers, Http }  from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/from';

@Injectable()

export class StorageService {
  AllContacts:any[]=[];

  headers:Object= {
   "Accept-Language": "en-US,en;q=0.8",
   "Host": "headers.jsontest.com",
   "Accept-Charset": "ISO-8859-1,utf-8;q=0.7,*;q=0.3",
   "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"
  }

  constructor(private http: Http) { this.retrieveContacts(); }

  retrieveContacts(): Observable<Contact[]> {
    return this.http.get("./resources/resource.json")
      .map(res => { this.AllContacts=res.json(); return res.json(); } )
      .catch( error => { return error.json(); } );
  }

  getCurrentTime() {

  }

  getContacts(): Observable<Contact[]> {
    console.log("All:",this.AllContacts);
    if(this.AllContacts.length > 0) {
      return this.AllContacts;
    }
    else {
      console.log('aaas');
      return this.retrieveContacts();
    }
  }
  createContact(contact) {
    console.log('all:',this.AllContacts,"new: ",contact);
    this.AllContacts.push(contact);
  }
}
