import { Component } from '@angular/core';
import { SkillsComponent } from '../skills/skills.component';
import { AboutDetails } from '../models/about-details';
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
  details?: AboutDetails;
  text?: string[];

  ngOnInit() {
    this.details = {
      title: "I'm Chris, a full-stack developer",
      text: `Having worked in web development for the past 5 years, my passion for the industry has only grown, as have my skills.
        \nWorking as a Product Developer for the NHS, I have worked to develop robust JavaScript applications that work in a 3rd party framework to provide integral patient support. I have also developed several full-stack applications tailored to the customer's needs. This has given me experience with working with PHP to create RESTful APIs, connecting to a wide variety of databases (PostgreSQL, MySQL, Microsoft SQL Server & MongoDB), as well as Angular, TypeScript, jQuery, SASS and HTML5 on the front-end to provide a useful and intuitive user experience.
        \nAs well as web applications, I have also designed and deployed hybrid applications (Ionic Framework) to work alongside these products, also using Angular. These skills I have gained have allowed me to work to mentor and pass on this knowledge to fellow developers in my team.
        \nThis passion has also carried over to my personal projects, where I have pushed the boundaries of my knowledge. I have experimented with Laravel and SQLite to build a simple website backend, using React as a clean and user-friendly front-end. I have worked with ASP.NET Core and C# to build workable web applications. I have also used Entity Framework in this to explore what is possible with building databases. This knowledge of C# and design practice I have also used to try my hand at game development, initially in Unity and now in Godot.
        \nRegardless of what I craft, I aim to bring the same passion for tinkering and problem-solving.`
    };

    this.setText();
  }

  setText() {
    if (this.details && this.details.text != null) {
      this.text = this.details.text.split("\n");
    }
  }
}
