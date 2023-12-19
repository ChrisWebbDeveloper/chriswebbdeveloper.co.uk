import { Component } from '@angular/core';
import { SkillsComponent } from '../skills/skills.component';
import { CommonModule } from '@angular/common';

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
  details?: { title: string, text: string };
  text: string[] = [];

  ngOnInit() {
    this.setText();
  }

  setText() {
    if (this.details && this.details.text != null) {
      this.text = this.details.text.split("\n");
    }
  }
}
