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
        this.link = project.link ?? null;
        this.img = project.img ?? null;
        this.startDate = new Date(project.start_date);
        this.endDate = project.end_date ? new Date(project.end_date) : undefined;
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
