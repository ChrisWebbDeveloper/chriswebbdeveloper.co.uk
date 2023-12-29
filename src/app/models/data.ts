export interface Data {
    name: string;
    title?: string;
    blurb?: string;

    contact_details: {
        email?: string;
        linkedin?: string;
        github?: string;
    };

    about_me: {
        long_form: string
    };

    projects: {
        title: string;
        formatted_description: string;
        link?: string;
        start_date: Date;
        end_date?: Date;
        tech_stack: string[];
    }[];

    skills: {
        name: string;
        exp: string;
    }[];
}
