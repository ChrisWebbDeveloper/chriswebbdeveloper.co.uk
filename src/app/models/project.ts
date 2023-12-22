export class Project {
    title: string;
    description: string[];
    link?: string;
    img?: string;
    startDate: Date;
    endDate?: Date;
    techStack: string[];

    constructor(project: any) {
        this.title = project.title;
        this.description = project.description ? project.description.split("\n") : [];
        if (project.link) this.link = project.link;
        if (project.img) this.img = project.img;
        this.startDate = new Date(project.start_date);
        if (project.end_date) this.endDate = new Date(project.end_date);
        this.techStack = project.tech_stack ?? [];
    }

    private getDateFormatted(date: Date) {
        return date.toLocaleDateString("default", { month: "short", year: "numeric" });
    }

    public getStartDateFormatted() {
        return this.getDateFormatted(this.startDate);
    }

    public getEndDateFormatted() {
        return this.endDate ? this.getDateFormatted(this.endDate) : "Present";
    }
}
