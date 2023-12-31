import { Component, Input } from '@angular/core';
import { SkillsComponent } from '../skills/skills.component';
import { CommonModule } from '@angular/common';
import { AboutDetails } from '../models/about-details';
import { Skill } from '../models/skill';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [
    CommonModule,
    SkillsComponent
  ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  @Input() details!: AboutDetails;
  @Input() skills!: Skill[];
  title: string = 'About Me';

  ngOnInit() {
    if (this.details && this.details.title) this.title = `I'm Chris, a ${this.details.title}`;
  }
}
