import { Component, OnInit } from '@angular/core';
import { Contact } from './contact';
import { StorageService } from './storage.service';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
//import * as $ from '@jquery';

@Component({
  // moduleId: module.id,
  selector: 'about',
  templateUrl: './views/contacts.component.html'
  // providers: [StorageService]
})

export class ContactsComponent implements OnInit {
  allContacts=[];
  selectContact={};
  //resp=null;
  constructor(private storageService: StorageService) {
  }

  ngOnInit():any {
    //this.allContacts=this.storageService.getContacts();
    let resp=this.storageService.getContacts() //.subscribe( data => { console.log("resss",data); this.allContacts=data; this.selectContact=data[0]; } );
    console.log(resp);
    // resp.subscribe(data => console.log(data) );
    if(Array.isArray(resp)) {
      this.allContacts=resp;
      this.selectContact=resp[0];
    }
    else {
      resp.subscribe( data => { this.allContacts=data; this.selectContact=data[0]; } );
    }
  }

  onSelect(cont:Contact) {
    this.selectContact=cont;
  }
}
