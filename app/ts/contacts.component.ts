import { Component, OnInit } from '@angular/core';
import { Contact } from './contact';
import { StorageService } from './storage.service';
//import * as $ from '@jquery';

@Component({
  // moduleId: module.id,
  selector: 'about',
  templateUrl: './views/contacts.component.html'
})

export class ContactsComponent implements OnInit {
  allContacts=[];
  selectContact={};
  constructor(private storageService: StorageService) {
  }

  ngOnInit():any {
    //this.allContacts=this.storageService.getContacts();
    this.storageService.getContacts().then( data => { this.allContacts=data; this.selectContact=data[0]; } );
    //this.allContacts=data; this.selectContact=this.allContacts[0];
    var form=new FormData();
    var el=document.getElementsByClassName('list-group');
    console.log(form,el);//,jQuery('.list-group'));
  }

  onSelect(cont:Contact) {
    this.selectContact=cont;
  }
}

(function getData(){
  console.log(document.getElementsByClassName('list-group'));
})();
