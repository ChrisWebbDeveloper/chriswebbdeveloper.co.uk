import { Component } from '@angular/core';
import { displayName } from '../../../package.json'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  displayName: string = displayName;
}
