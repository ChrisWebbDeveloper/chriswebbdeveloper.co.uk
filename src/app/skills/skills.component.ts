import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Skill } from '../models/skill';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  @Input() skills!: Skill[];

  ngOnInit() {
    this.skills.sort((a , b) => a.exp > b.exp ? -1 : 1);
  }
}
