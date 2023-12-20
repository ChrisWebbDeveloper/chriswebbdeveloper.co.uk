import { Component, Input } from '@angular/core';
import { ContactDetails } from '../models/contact-details';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  @Input() details!: ContactDetails;

  ngOnInit() {
    console.log("Contact", this.details);
  }
}
