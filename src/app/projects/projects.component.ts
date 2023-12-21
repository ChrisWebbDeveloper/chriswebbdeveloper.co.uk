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
  techsList: string[] = [];
  selectedTech: string = "all";

  ngOnInit() {
    this.sortProjects();
    this.getSkillsList();
  }

  sortProjects() {
    this.details.projects.sort((a, b) => {
      if (a.endDate == b.endDate) {
        if (a.startDate == b.startDate) {
          if (a.title.toLowerCase() < b.title.toLocaleLowerCase()) return -1;
          else return 1;
        }
        else if (a.startDate > b.startDate) return -1;
        else return 1;
      }
      else if (!a.endDate) return -1;
      else return 1;
    });
  }

  getSkillsList() {
    this.details.projects.forEach(project => {
      project.techStack.forEach(tech => {
        if (!this.techsList.includes(tech)) this.techsList.push(tech);
      });
    });

    this.techsList.sort((a, b) => a.toLowerCase() < b.toLowerCase() ? -1 : 1);
  }

  setSelectedTech(tech: string) {
    this.selectedTech = tech;
  }
}
