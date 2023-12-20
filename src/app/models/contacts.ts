export class Contacts {
    email: string;
    linkedin: string;
    github: string;

    constructor(contacts: any) {
        this.email = contacts.email ?? "";
        this.linkedin = contacts.linkedin ?? "";
        this.github = contacts.github ?? "";
    }
}
