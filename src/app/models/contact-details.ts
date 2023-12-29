export class ContactDetails {
    email?: string;
    linkedin?: string;
    github?: string;

    constructor(contacts: {email?: string, linkedin?: string, github?: string}) {
        if (contacts.email) this.email = contacts.email;
        if (contacts.linkedin) this.linkedin = contacts.linkedin;
        if (contacts.github) this.github = contacts.github;
    }

    private getLink(link: string | undefined, base: string): string | null {
        if (link && link.length > 0) return base + this.linkedin;
        else return null;
    }

    public getLinkedinLink(): string | null {
        return this.getLink(this.linkedin, "https://www.linkedin.com/in/");
    }

    public getGithubLink(): string | null {
        return this.getLink(this.github, "https://www.github.com/");
    }
}
