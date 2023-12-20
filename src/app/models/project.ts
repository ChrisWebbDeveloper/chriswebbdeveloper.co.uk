export class Project {
    title: string;
    description: string[];
    link?: string;
    startDate: Date;
    startDateFormatted: string;
    endDate?: Date;
    endDateFormatted: string;
    techStack: string[];

    constructor(project: any) {
        this.title = project.title;
        this.description = project.description ? project.description.split("\n") : [];
        this.link = project.link ?? null;
        this.startDate = new Date(project.start_date);
        this.startDateFormatted = this.startDate.toLocaleDateString("default", { month: "short", year: "numeric" });
        this.endDate = project.end_date ? new Date(project.end_date) : undefined;
        this.endDateFormatted = this.endDate ? this.endDate.toLocaleDateString("default", { month: "short", year: "numeric" }) : "Present";
        this.techStack = project.tech_stack ?? [];
    }
}
