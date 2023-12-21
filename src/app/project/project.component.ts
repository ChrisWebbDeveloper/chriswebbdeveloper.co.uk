import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Project } from '../models/project';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [
    NgFor,
    NgIf
  ],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  @Input() project!: Project;
  @Input() selectedTech: string = "all";
  @Output() selectedTechChange = new EventEmitter<string>();

  setSelectedTech(tech: string) {
    this.selectedTech = tech;
    this.selectedTechChange.emit(this.selectedTech);
  }
}
