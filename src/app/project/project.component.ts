import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Project } from '../models/project';
import { CommonModule, IMAGE_CONFIG, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage
  ],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  @Input() project!: Project;
  @Input() selectedTech: string = 'All';
  @Output() selectedTechChange = new EventEmitter<string>();
  @Input() selectedTechMethod!: Function;

  setSelectedTech(event: Event, tech: string): void {
    this.selectedTechMethod(event, tech);
    this.selectedTechChange.emit(this.selectedTech);
  }
}
