import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  skills: { name:string, exp:number }[] = [];

  ngOnInit() {
    this.skills.sort((a , b) => a.exp > b.exp ? -1 : 1);
  }
}
