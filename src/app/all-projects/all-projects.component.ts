import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from '../project/project.component';
import { ProjectContainsTechPipe } from '../pipes/project-contains-tech.pipe';
import { Project } from '../models/project';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-all-projects',
  standalone: true,
  imports: [
    CommonModule,
    ProjectComponent,
    ProjectContainsTechPipe
  ],
  templateUrl: './all-projects.component.html',
  styleUrl: './all-projects.component.scss',
  host: {'class': 'bg-dark text-white'}
})
export class AllProjectsComponent {
  @Input() projects!: Project[];
  techsList: string[] = [];
  selectedTech: string = 'all';

  constructor(private image: ImageService) {
  }

  ngOnInit() {
    this.getProjectImages();
    this.sortProjects();
    this.getTechsList();
  }

  getProjectImages(): void {
    this.projects.forEach(project => {
      this.image.getImage(project.title).subscribe({
        next: val => project.img = val
      });
    });
  }

  sortProjects(): void {
    this.projects.sort((a, b) => {
      if (a.endDate == b.endDate) {
        if (a.startDate == b.startDate) {
          if (a.title.toLowerCase() < b.title.toLocaleLowerCase()) return -1;
          else return 1;
        }
        else if (a.startDate > b.startDate) return -1;
        else return 1;
      }
      else if (!a.endDate || (b.endDate && a.endDate > b.endDate)) return -1;
      else return 1;
    });
  }

  getTechsList(): void {
    this.projects.forEach(project => {
      project.techStack.forEach(tech => {
        if (!this.techsList.includes(tech)) this.techsList.push(tech);
      });
    });

    this.techsList.sort((a, b) => a.toLowerCase() < b.toLowerCase() ? -1 : 1);
  }

  setSelectedTech(event: Event, tech: string): void {
    event.preventDefault();
    if (this.selectedTech != tech) this.selectedTech = tech;
    else this.selectedTech = 'all';
  }
}
