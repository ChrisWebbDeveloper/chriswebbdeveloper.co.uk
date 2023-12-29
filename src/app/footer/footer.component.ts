import { Component } from '@angular/core';
import packageJson from '../../../package.json';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  version: string = packageJson.version;
  buildYear: number = packageJson.buildYear;
  currentYear: number = new Date().getFullYear();
}
