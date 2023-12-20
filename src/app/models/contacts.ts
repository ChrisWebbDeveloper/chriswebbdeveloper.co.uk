export class Contacts {
    email: string;
    linkedin: string;
    linkedinLink: string;
    github: string;
    githubLink: string;

    constructor(contacts: any) {
        this.email = contacts.email ?? "";
        this.linkedin = contacts.linkedin ?? "";
        this.linkedinLink = "https://www.linkedin.com/in/" + contacts.linkedin ?? "";
        this.github = contacts.github ?? "";
        this.githubLink = "https://github.com/" + contacts.github ?? "";
    }
}
