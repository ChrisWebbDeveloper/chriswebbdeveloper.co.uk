import { Pipe, PipeTransform } from '@angular/core';
import { Project } from '../models/project';

@Pipe({
  name: 'projectContainsTech',
  standalone: true
})
export class ProjectContainsTechPipe implements PipeTransform {
  transform(projects: Project[], tech: string): Project[] {
    if (tech == 'All') return projects;
    else return projects.filter(project => project.techStack.includes(tech));
  }
}
