import { HomeDetails } from "./home-details";
import { AboutDetails } from "./about-details";
import { ContactDetails } from "./contact-details";
import { ProjectsDetails } from "./projects-details";

export class Content {
    homeDetails: HomeDetails;
    aboutDetails: AboutDetails;
    projectsDetails: ProjectsDetails;
    contactDetails: ContactDetails;

    constructor(content: any) {
        this.homeDetails = new HomeDetails(content.home_details ?? {});
        this.aboutDetails = new AboutDetails(content.about_details ?? {});
        this.projectsDetails = new ProjectsDetails(content.projects_details ?? {});
        this.contactDetails = new ContactDetails(content.contact_details ?? {});
    }
}
