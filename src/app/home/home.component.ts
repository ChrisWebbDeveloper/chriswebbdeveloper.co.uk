import { Component, Input } from '@angular/core';
import { HomeDetails } from '../models/home-details';
import { NgFor, NgIf } from '@angular/common';
import { ContactDetails } from '../models/contact-details';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgFor,
    NgIf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  @Input() details!: HomeDetails;
  @Input() contacts!: ContactDetails;
}
