export class Project {
    title: string;
    description: string[];
    link?: string;
    img?: string;
    startDate: Date;
    endDate?: Date;
    techStack: string[];

    constructor(project: {title: string, formatted_description: string, link?: string | null, start_date: string, end_date?: string | null, tech_stack: string[]}) {
        this.title = project.title;
        this.description = project.formatted_description.split('\n');
        if (project.link) this.link = project.link;
        this.startDate = new Date(project.start_date);
        if (project.end_date) this.endDate = new Date(project.end_date);
        this.techStack = project.tech_stack;
    }

    private getDateFormatted(date: Date): string {
        return date.toLocaleDateString('default', { month: 'short', year: 'numeric' });
    }

    public getStartDateFormatted(): string {
        return this.getDateFormatted(this.startDate);
    }

    public getEndDateFormatted(): string {
        return this.endDate ? this.getDateFormatted(this.endDate) : 'Present';
    }
}
