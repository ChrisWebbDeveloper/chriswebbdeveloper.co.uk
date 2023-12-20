export class AboutDetails {
    title: string;
    text: string[];

    constructor(about: any) {
        this.title = about.title ?? "About Me";
        this.text = about.text.split
    }
}
