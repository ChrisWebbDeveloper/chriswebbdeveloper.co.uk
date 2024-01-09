import { Component, Input } from '@angular/core';
import { HomeDetails } from '../models/home-details';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ContactDetails } from '../models/contact-details';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  @Input() details!: HomeDetails;
  @Input() contacts!: ContactDetails;
}
