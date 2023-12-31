import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { DataService } from './services/data.service';
import { Data } from './models/data';
import { AboutDetails } from './models/about-details';
import { HomeDetails } from './models/home-details';
import { Skill } from './models/skill';
import { Project } from './models/project';
import { ContactDetails } from './models/contact-details';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HomeComponent,
    AboutMeComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  homeDetails!: HomeDetails;
  aboutDetails!: AboutDetails;
  skills: Skill[] = [];
  projects: Project[] = [];
  contactDetails!: ContactDetails;
  
  constructor(private data: DataService) {
  }

  ngOnInit() {
    this.data.getData().subscribe({
      next: (val: Data) => {
        this.homeDetails = new HomeDetails(val.name, val.blurb);
        this.aboutDetails = new AboutDetails(val.about_me.long_form, val.title);
        this.skills = val.skills.map(skill => new Skill(skill));
        this.projects = val.projects.map(project => new Project(project));
        this.contactDetails = new ContactDetails(val.contact_details);
      },
      error: err => alert('Content could not be found at this time. Please try again later.')
    });
  }
}
