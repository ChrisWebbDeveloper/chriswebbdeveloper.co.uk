import { Component, Input } from '@angular/core';
import { ContactDetails } from '../models/contact-details';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  @Input() details!: ContactDetails;
}
