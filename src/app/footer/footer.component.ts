import { Component } from '@angular/core';
import { displayName, version, buildYear } from '../../../package.json';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  version: string = version;
  displayName: string = displayName;
  buildYear: number = buildYear;
  currentYear: number;

  constructor() {
    this.currentYear = new Date().getFullYear();
  }
}
