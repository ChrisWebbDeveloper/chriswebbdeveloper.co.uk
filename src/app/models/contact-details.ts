export class ContactDetails {
    email?: string;
    linkedin?: string;
    github?: string;

    constructor(contacts: {email?: string | null, linkedin?: string | null, github?: string | null}) {
        if (contacts.email) this.email = contacts.email;
        if (contacts.linkedin) this.linkedin = contacts.linkedin;
        if (contacts.github) this.github = contacts.github;
    }

    private getLink(link: string | undefined, base: string): string | null {
        if (link && link.length > 0) return base + link;
        else return null;
    }

    public getLinkedinLink(): string | null {
        return this.getLink(this.linkedin, 'https://linkedin.com/in/');
    }

    public getGithubLink(): string | null {
        return this.getLink(this.github, 'https://github.com/');
    }
}
