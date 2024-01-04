export interface DataObj {
    name: string;
    title?: string | null;
    blurb?: string | null;

    contact_details: {
        email?: string | null;
        linkedin?: string | null;
        github?: string | null;
        [x: string | number | symbol]: unknown;
    };

    about_me: {
        long_form: string;
        [x: string | number | symbol]: unknown;
    };

    projects: {
        title: string;
        formatted_description: string;
        link?: string | null;
        start_date: string;
        end_date?: string | null;
        tech_stack: string[];
        [x: string | number | symbol]: unknown;
    }[];

    skills: {
        name: string;
        exp?: number | null;
    }[];

    [x: string | number | symbol]: unknown;
}
