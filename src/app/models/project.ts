export class Project {
    title: string;
    description: string[];
    link?: string;
    startDate: Date;
    endDate?: Date;
    techStack: string[];

    constructor(project: {title: string, formatted_description: string, link?: string | null, start_date: string, end_date?: string | null, tech_stack: string[], [x: string | number | symbol]: unknown}) {
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

    getStartDateFormatted(): string {
        return this.getDateFormatted(this.startDate);
    }

    getEndDateFormatted(): string {
        return this.endDate ? this.getDateFormatted(this.endDate) : 'Present';
    }

    getImgUrl(): string {
        let fileName: string = this.title.toLowerCase().replaceAll(' ', '-').replaceAll('(', '').replaceAll(')', '')
        if (fileName.length > 0) return `../../assets/images/${fileName}.webp`;
        else return '';
    }
}
