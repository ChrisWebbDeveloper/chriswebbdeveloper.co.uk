import { Project } from "./project";

export class ProjectsDetails {
    projects: Project[];

    constructor(projects: any) {
        this.projects = projects.projects ? projects.projects.map((project: any) => new Project(project)) : [];
    }
}
