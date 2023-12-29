import { Component, Input } from '@angular/core';
import { ContactDetails } from '../models/contact-details';
import { CommonModule } from '@angular/common';
import { environment } from '../../environments/environment.development';
import { Cv } from '../models/cv';

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
  cv?: Cv;

  constructor() {
    if (environment.cv) this.cv = new Cv(environment.cv);
  }
}
