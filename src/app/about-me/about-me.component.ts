import { Component, Input } from '@angular/core';
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
  @Input() details?: {};
  text: string[] = [];

  ngOnInit() {
    console.log("About", this.details);
  }

  setText() {
    // if (this.details && this.details.text != null) {
    //   this.text = this.details.text.split("\n");
    // }
  }
}
