import { Component, OnInit } from '@angular/core';
import { Contact } from './contact';
import { StorageService } from './storage.service';

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
    this.allContacts=this.storageService.getContacts();
    this.selectContact=this.allContacts[0];
  }

  onSelect(cont:Contact) {
    this.selectContact=cont;
  }
}
