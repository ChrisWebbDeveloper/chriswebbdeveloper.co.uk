import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  @Input() details?: {};
  @Input() contacts?: {};

  ngOnInit() {
    console.log("Contact", this.details);
  }
}
