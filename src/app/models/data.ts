export interface Data {
    name: string;
    title?: string | null;
    blurb?: string | null;

    contact_details: {
        email?: string | null;
        linkedin?: string | null;
        github?: string | null;
    };

    about_me: {
        long_form: string
    };

    projects: {
        title: string;
        formatted_description: string;
        link?: string | null;
        start_date: Date;
        end_date?: Date | null;
        tech_stack: string[];
    }[];

    skills: {
        name: string;
        exp?: number | null;
    }[];
}
