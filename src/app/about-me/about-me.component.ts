import { Component, Input } from '@angular/core';
import { SkillsComponent } from '../skills/skills.component';
import { CommonModule } from '@angular/common';
import { AboutDetails } from '../models/about-details';

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
}
