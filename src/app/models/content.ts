import { HomeDetails } from "./home-details";

export class Content {
    homeDetails: HomeDetails;
    aboutDetails: {};
    projectsDetails: {};
    contactDetails: {};

    constructor(content: { home_details: any, about_details: any, projects_details: any, contact_details: any}) {
        this.homeDetails = new HomeDetails(content.home_details ?? {});
        this.aboutDetails = content.about_details ?? {};
        this.projectsDetails = content.projects_details ?? {};
        this.contactDetails = content.contact_details ?? {};
    }
}
