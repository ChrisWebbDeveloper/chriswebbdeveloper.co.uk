export class Content {
    homeDetails: {};

    constructor(content: { home_details: {} }) {
        this.homeDetails = content.home_details;
    }
}
