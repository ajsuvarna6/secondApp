import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { Contacts } from './mock-contacts';

@Injectable()

export class StorageService {
  getContacts():Contact[] {
    return Contacts;
  }
  createContact(contact) {
    Contacts.push(contact);
  }
}
