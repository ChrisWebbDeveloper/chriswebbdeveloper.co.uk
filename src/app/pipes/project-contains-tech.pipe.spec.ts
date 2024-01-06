import { Project } from '../models/project';
import { ProjectContainsTechPipe } from './project-contains-tech.pipe';

describe('ProjectContainsTechPipe', () => {
    const pipe = new ProjectContainsTechPipe();
    const projects: Project[] = [
        new Project({
            "title": "Archipelago",
            "formatted_description": "Trying my hand at something different, I have experimented with game development. Taking my fondness and love of old-school top-down games like Zelda and Final Fantasy, I have started to build a top-down dungeon-crawler with combat that involves status effects and weapons of different style, speed, damage and other abilities.\nThis was initially built in Unity but rebuilt in Godot, opting to use C# to build components. I have also designed all of my own artwork in GIMP via 16x16 sprites.\nThis continues to be an experimental project for me, and something I continue with in my spare time.",
            "description": [
                "Top-down 2D dungeon crawler game",
                "Originally built in Unity",
                "Migrating to Godot",
                "Written in C# using a variety of components to isolate logic functionality",
                "Drawing 16x16 sprites in GIMP, combined into sprite sheets"
            ],
            "link": null,
            "start_date": "2022-04-01",
            "end_date": null,
            "tech_stack": [
                "C#",
                "Godot",
                "Unity",
                "GIMP"
            ]
        }),
        new Project({
            "title": "Chris Webb Developer (v3)",
            "formatted_description": "The third and current version of my website! This is a more streamlined version of my portfolio, opting to use Angular with a simple JSON object to pull my details from, similar to an API call. It also has used SASS for simple, elegant styling.",
            "description": [
                "Portfolio website for web development",
                "Built in Angular with SASS",
                "Uses components to isolate functionality, as well as services, models and pipes to manage content",
                "Uses an API call to retrieve details to include in the website",
                "Includes Unit Testing"
            ],
            "link": "https://github.com/ChrisWebbDeveloper/chriswebbdeveloper.co.uk",
            "start_date": "2023-12-16",
            "end_date": null,
            "tech_stack": [
                "Angular",
                "TypeScript",
                "SASS",
                "CSS3",
                "Bootstrap",
                "HTML5"
            ]
        }),
        new Project({
            "title": "Chris Webb Developer (v2)",
            "formatted_description": "The second version of my website. This was designed using Laravel with React components, and provided with bootstrap styling via ReactBootstrap.\nThe back-end has been used to provide APIs for pulling through the information displayed here (linked to an SQLite database), as well as handling the Contact form through Sendgrid.\nSASS is also used throughout for elegant styling, transpiled to CSS3 via Gulp.js.",
            "description": [
                "Portfolio website for web development",
                "Back-end built in Laravel / PHP with an SQLite database",
                "Front-end built in React and SASS to be fully responsive",
                "Connects to an SQLite database via a single API to populate page information",
                "Connects via SendGrid to send emails via a contact form"
            ],
            "link": "https://github.com/ChrisWebbDeveloper/chriswebbdeveloper.co.uk-v2",
            "start_date": "2021-08-04",
            "end_date": "2022-06-25",
            "tech_stack": [
                "Laravel",
                "PHP",
                "SQLite",
                "React",
                "JavaScript",
                "SASS",
                "CSS3",
                "Bootstrap",
                "HTML5"
            ]
        }),
        new Project({
            "title": "Photography Portfolio Builder",
            "formatted_description": "An ASP.Net Core 5 project that allows users to log in and arrange, display and sort portfolios. This allows photos to be uploaded, details and titles provided, and then included in various portfolios, and potentially in different categories. Portfolios can be kept in draft, privatised, or featured.\nAbout sections allow details and images to be included, and Contacts allows social media links to be included. This links to a MySQL database, and uses Typescript and SASS for functionality and styling.",
            "description": [
                "Website to display photos inside portfolios, managed by signing in to upload, provide details and format the website accordingly",
                "Back-end written in ASP.NET Core with C#, connecting to a MySQL database",
                "Front-end written in HTML5 and Typescript with SASS for styling",
                "Uses Entity Framework to build and maintain the database",
                "Gulp included from automating processes, such as compilation and minifying"
            ],
            "link": "https://github.com/ChrisWebbDeveloper/photography-portfolio-builder",
            "start_date": "2021-08-23",
            "end_date": "2022-02-14",
            "tech_stack": [
                "ASP.NET Core 5",
                "C#",
                "Entity Framework",
                "MySQL",
                "TypeScript",
                "Gulp.js",
                "SASS",
                "CSS3",
                "Bootstrap",
                "HTML5"
            ]
        }),
        new Project({
            "title": "Chris Webb Developer (v1)",
            "formatted_description": "The first version of my website. Then named deanwebbdeveloper.com, it was used to showcase the technologies I had learned up to that point. This included HTML5, CSS3, JavaScript, jQuery, PHP, MYSQL, and Python. It also demonstrated my ability to work with API calls.\nThis website also included a PHP email form that would automatically send emails to me with the details provided.",
            "description": [
                "Portfolio website for web development",
                "Built in HTML5, CSS3 and jQuery / JavaScript",
                "Includes demos of languages / technologies learnt, including HTML5, CSS3, JavaScript, jQuery, PHP, MySQL, API calls and Python",
                "Includes a PHP email form"
            ],
            "link": "https://github.com/ChrisWebbDeveloper/chriswebbdeveloper.co.uk-v1",
            "start_date": "2018-03-20",
            "end_date": "2018-09-23",
            "tech_stack": [
                "HTML5",
                "CSS3",
                "JavaScript",
                "jQuery",
                "PHP",
                "MySQL",
                "Python"
            ]
        }),
        new Project({
            "title": "Kelly Daniels Photography",
            "formatted_description": "A photography portfolio website developed using Wordpress. A theme has been used and overhauled with custom styling via css as well as alteration to PHP throughout. This is maintained using the Wordpress admin tools and run using a MySQL database.",
            "description": [
                "Photography Portfolio website designed in WordPress",
                "Custom PHP to affect website functionality",
                "Custom CSS and editing customisation for desired layout",
                "Built-in blog",
                "Fully Responsive Design and UX"
            ],
            "link": null,
            "start_date": "2017-09-01",
            "end_date": "2017-10-01",
            "tech_stack": [
                "WordPress",
                "PHP",
                "MySQL",
                "CSS3"
            ]
        })
    ]
    
    it(`should create an instance`, () => {
        expect(pipe).toBeTruthy();
    });

    it((`should return all the projects if tech is 'all'`), () => {
        expect(pipe.transform(projects, 'All')).toEqual(projects);
    });

    it((`should return the projects that include the specified tech in its 'techStack' property`), () => {
        const techList = ['C#', 'TypeScript', 'PHP', 'HTML5', 'MySQL', 'qwerty', ''];
        techList.forEach(tech => {
            const expected = projects.filter(project => project.techStack.includes(tech));
            expect(pipe.transform(projects, tech)).toEqual(expected);
        });
    });
});
