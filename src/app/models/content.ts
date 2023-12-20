import { AboutDetails } from "./about-details";
import { ContactDetails } from "./contact-details";
import { HomeDetails } from "./home-details";

export class Content {
    homeDetails: HomeDetails;
    aboutDetails: AboutDetails;
    projectsDetails: {};
    contactDetails: ContactDetails;

    constructor(content: any) {
        this.homeDetails = new HomeDetails(content.home_details ?? {});
        this.aboutDetails = new AboutDetails(content.about_details ?? {});
        this.projectsDetails = content.projects_details ?? {};
        this.contactDetails = new ContactDetails(content.contact_details ?? {});
    }
}
