import { Skill } from "./skill";

export class AboutDetails {
    title: string;
    text: string[];
    skills: Skill[];

    constructor(about: any) {
        this.title = about.title ?? "About Me";
        this.text = about.text ? about.text.split("\n") : [];
        this.skills = about.skills ?? [];
    }
}
