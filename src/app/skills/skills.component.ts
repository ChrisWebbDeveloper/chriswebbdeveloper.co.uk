import { Component } from '@angular/core';
import { Skill } from '../models/skill';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    NgFor
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills : Skill[] = [];

  ngOnInit() {
    this.skills = [
      { name:"ASP.NET Core", exp:1 },
      { name:"TypeScript", exp:2 },
      { name:"jQuery", exp:3 },
      { name:"React", exp:40 },
      { name:"JavaScript", exp:5 },
      { name:"NoSQL (MongoDB)", exp:80 },
      { name:"Ionic Framework", exp:85 },
      { name:"Bootstrap", exp:100 },
      { name:"Angular", exp:50 },
      { name:"HTML5", exp:30 },
      { name:"Entity Framework", exp:41 },
      { name:"SASS", exp:6 },
      { name:"Git", exp:7 },
      { name:"PHP", exp:70 },
      { name:"RESTful APIs", exp:15 },
      { name:"SQL (SQL Server, MySQL, PostgreSQL)", exp:10 },
      { name:"CSS3", exp:0 },
      { name:"C#", exp:90 },
      { name:"Laravel", exp:60 },
      { name:"Python", exp:50 },
      { name:"SCSS", exp:45 },
      { name:"WordPress", exp:35 },
    ].sort((a , b) => a.exp > b.exp ? -1 : 1);
  }
}
