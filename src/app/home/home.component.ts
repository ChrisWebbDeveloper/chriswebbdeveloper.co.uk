import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  @Input() details? : {};

  ngOnInit() {
    console.log("Home", this.details);
  }
}
