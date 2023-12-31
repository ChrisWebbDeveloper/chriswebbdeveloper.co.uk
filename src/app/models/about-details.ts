export class AboutDetails {
    title?: string;
    aboutMe!: string[];

    constructor(aboutMe: string, title?: string | null) {
        if (title) this.title = title;
        this.aboutMe = aboutMe.split('\n');
    }
}
