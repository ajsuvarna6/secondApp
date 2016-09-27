import { Component } from '@angular/core';
import { StorageService } from "./storage.service";

@Component({
//moduleId: module.id,
  selector: 'home',
  templateUrl: './views/createContact.component.html'
})

export class CreateContactComponent {
  public contacts={
    firstName: "",
    lastName: "",
    contact: null,
    address: ""
  }
  constructor(private storageService: StorageService) {}

  createContact(){
    this.storageService.createContact(this.contacts);
    alert("Contact Created");
    this.contacts={
      firstName: "",
      lastName: "",
      contact: null,
      address: ""
    }
  }
}
