import { Component, Input } from '@angular/core';
import { ProjectsDetails } from '../models/projects-details';
import { NgFor, NgIf } from '@angular/common';
import { ProjectComponent } from '../project/project.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    ProjectComponent
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  host: {'class': 'bg-dark text-white'}
})
export class ProjectsComponent {
  @Input() details!: ProjectsDetails;

  ngOnInit() {
    this.sortProjects();
  }

  sortProjects() {
    this.details.projects.sort((a, b) => a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1);
  }
}
