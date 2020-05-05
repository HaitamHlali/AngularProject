import { Contact } from './../Models/contact';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';  // Firebase modules for Database, Data list and Single object

@Injectable({
  providedIn: 'root'
})

export class CrudService {
  contactsRef: AngularFireList<any>;   
  contactRef: AngularFireObject<any>;   

  constructor(private db: AngularFireDatabase) { }


   AddStudent(contact: Contact) {
    this.contactsRef.push({
      firstName: contact.firstname,
      lastName: contact.lastname,
      email: contact.email,
      number: contact.number
    })
  }

  GetStudent(id: string) {
    this.contactRef = this.db.object('contacts-list/' + id);
    return this.contactRef;
  }

  GetStudentsList() {
    this.contactsRef = this.db.list('contacts-list');
    return this.contactsRef;
  }  

  UpdateStudent(contact: Contact) {
    this.contactRef.update({
      firstName: contact.firstname,
      lastName: contact.lastname,
      email: contact.email,
      number: contact.number
    })
  }  

  DeleteStudent(id: string) { 
    this.contactRef = this.db.object('students-list/'+id);
    this.contactRef.remove();
  }
  
}
  
