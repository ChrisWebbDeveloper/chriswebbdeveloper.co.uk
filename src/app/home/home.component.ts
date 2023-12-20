import { Component, Input } from '@angular/core';
import { HomeDetails } from '../models/home-details';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  @Input() details? : HomeDetails;

  ngOnInit() {
    console.log("Home", this.details);
  }
}
