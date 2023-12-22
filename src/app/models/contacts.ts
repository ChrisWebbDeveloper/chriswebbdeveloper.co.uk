export class Contacts {
    email?: string;
    linkedin?: string;
    github?: string;

    constructor(contacts: any) {
        if (contacts.email) this.email = contacts.email;
        if (contacts.linkedin) this.linkedin = contacts.linkedin;
        if (contacts.github) this.github = contacts.github;
    }

    private getLink(link: string | undefined, base: string): string {
        if (link) return base + this.linkedin;
        else return "";
    }

    public getLinkedinLink(): string {
        return this.getLink(this.linkedin, "https://www.linkedin.com/in/");
    }

    public getGithubLink(): string {
        return this.getLink(this.github, "https://www.github.com/");
    }
}
