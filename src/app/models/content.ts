export class Content {
    homeDetails: {};
    aboutDetails: {};
    projectsDetails: {};
    contactDetails: {};

    constructor(content: { home_details: {}, about_details: {}, projects_details: {}, contact_details: {}}) {
        this.homeDetails = content.home_details;
        this.aboutDetails = content.about_details;
        this.projectsDetails = content.projects_details;
        this.contactDetails = content.contact_details;
    }
}
