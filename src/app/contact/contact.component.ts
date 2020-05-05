import { Contact } from './../Models/contact';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm:FormGroup;

  contact:Contact;

  firstname:AbstractControl;
  lastname:AbstractControl;
  email:AbstractControl;
  number:AbstractControl;


  constructor(private formbuilder:FormBuilder) { 
    this.contactForm =  this.formbuilder.group({
      firstname:[null,(Validators.required,Validators.minLength(4))],
      lastname:[null,(Validators.required,Validators.minLength(4))],
      email:[null,[Validators.required,Validators.email]],
      number: [null, [Validators.required,Validators.minLength(6)]]
      
    })

    this.firstname = this.contactForm.controls.firstname;
    this.lastname = this.contactForm.controls.lastname;
    this.email = this.contactForm.controls.email;
    this.number = this.contactForm.controls.number;
    
    
  }



  OnSubmit(){
    this.contact = {
      firstname : this.contactForm.value.firstname,
      lastname : this.contactForm.value.lastname,
      email : this.contactForm.value.email,
      number : this.contactForm.value.number      
    }

  }

  ngOnInit(): void {
  }

}
