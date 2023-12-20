import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  host: {'class': 'bg-dark text-white'}
})
export class ProjectsComponent {
  @Input() details?: {};

  ngOnInit() {
    console.log("Projects", this.details);
  }
}
