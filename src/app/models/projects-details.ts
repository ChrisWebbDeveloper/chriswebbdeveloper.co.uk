import { Project } from "./project";

export class ProjectsDetails {
    title!: string;
    text?: string;
    projects: Project[] = [];

    constructor(projects: any) {
        this.title = projects.title ?? "Projects";
        this.text = projects.text ?? null;

        if (projects.projects) {
            projects.projects.forEach((project: any) => {
                this.projects.push(new Project(project));
            });
        };
    }
}
