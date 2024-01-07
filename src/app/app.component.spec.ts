import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DataService } from './services/data.service';
import { DataObj } from './models/data-obj';
import { HomeDetails } from './models/home-details';
import { AboutDetails } from './models/about-details';
import { Skill } from './models/skill';
import { Project } from './models/project';
import { ContactDetails } from './models/contact-details';
import { of, throwError } from 'rxjs';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { AllProjectsComponent } from './all-projects/all-projects.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

describe('AppComponent', () => {
    let fixture: ComponentFixture<AppComponent>;
    let app: AppComponent;
    let dataSpy: jasmine.SpyObj<DataService>;

    function sortSkills(skills: Skill[]): Skill[] {
        return skills.sort((a, b) => a.name < b.name ? -1 : a.exp < b.exp ? -1 : 1);
    };

    function sortProjects(projects: Project[]): Project[] {
        return projects.sort((a, b) => a.title < b.title ? -1 : 1);
    };

    const data: DataObj = {
        "name": "Chris Webb",
        "title": "Software & Web Developer",
        "blurb": "I am a full-stack developer of software and web applications",
        "contact_details": {
            "email": "webb.christopher@live.co.uk",
            "locations": [
                "Nottingham, UK",
                "London, UK"
            ],
            "website": "https://chriswebbdeveloper.co.uk",
            "linkedin": "webb-christopher",
            "github": "ChrisWebbDeveloper"
        },
        "about_me": {
            "short_form": "Having worked in web development for the past 5 years, my passion for the industry has only grown, as have my skills.\nI am a mid-level developer looking for more senior opportunities and roles. I am experienced in full-stack development of PHP, PostgreSQL and Angular, as well as hybrid app development in Ionic. I have built web applications in ASP.NET Core, C#, Entity Framework, Laravel and React.\nRegardless of what I craft, I aim to bring the same passion for tinkering and problem-solving.",
            "long_form" : "Having worked in web development for the past 5 years, my passion for the industry has only grown, as have my skills.\nWorking as a Product Developer for the NHS, I have worked to develop robust JavaScript applications that work in a 3rd party framework to provide integral patient support. I have also developed several full-stack applications tailored to the customer's needs. This has given me experience with working with PHP to create RESTful APIs, connecting to a wide variety of databases (PostgreSQL, MySQL, Microsoft SQL Server & MongoDB), as well as Angular, TypeScript, jQuery, SASS and HTML5 on the front-end to provide a useful and intuitive user experience.\nAs well as web applications, I have also designed and deployed hybrid applications (Ionic Framework) to work alongside these products, also using Angular. These skills I have gained have allowed me to work to mentor and pass on this knowledge to fellow developers in my team.\nThis passion has also carried over to my personal projects, where I have pushed the boundaries of my knowledge. I have experimented with Laravel and SQLite to build a simple website back-end, using React as a clean and user-friendly front-end. I have worked with ASP.NET Core and C# to build workable web applications. I have also used Entity Framework in this to explore what is possible with building databases. This knowledge of C# and design practice I have also used to try my hand at game development, initially in Unity and now in Godot.\nRegardless of what I craft, I aim to bring the same passion for tinkering and problem-solving."
        },
        "experience": [
            {
                "title": "Product Developer",
                "company": "Nottingham University Hospitals NHS Trust",
                "location": "Nottingham, UK",
                "type": "hybrid",
                "start_date": "2018-02-01",
                "end_date": null,
                "description": [
                    "Designing and building full-stack applications to be used across the Trust, primarily in a PHP and PostgreSQL back-end, and HTML5 / SASS / jQuery front-end, including building REST API calls",
                    "Designing and deploying hybrid mobile applications in the Ionic App Framework, utilising Angular and REST API calls",
                    "Updating existing projects to include new features and debug issues",
                    "Providing templates and guides of best practices for technologies used and how best to use them",
                    "Designing software and adding to frameworks to be used in a medical environment according to a specification, using JavaScript in a 3rd party library",
                    "Writing technical specifications for future usage of how the designed product works",
                    "Conducting full testing and peer-testing, and recording appropriately across a variety of systems",
                    "Using Git, a Wiki and a Call Management System to ensure records of process are kept and version control is maintained",
                    "Working in an environment that maintains an ISO 9001 standard",
                    "Communicating with a large team in a variety of departments to ensure projects and products are designed to the highest standard",
                    "Mentoring and training junior developers to Trust best practices and how to build in relevant technologies"
                ]
            },
            {
                "title": "General Clinical Administrator - Paediatrics",
                "company": "Nottingham University Hospitals NHS Trust",
                "location": "Nottingham, UK",
                "type": "on-site",
                "start_date": "2017-10-01",
                "end_date": "2018-02-01",
                "description": [
                    "Typing via recorded dictation to produce letters to be signed and sent to relevant parties",
                    "Communicating with doctors and managers to ensure all relevant documents are correctly completed and sensitively handled to their respective recipients",
                    "Contacting parents or carers of children to arrange appointments and handling of sensitive information",
                    "Checking letters, emails, and reporting documents to see if they have been sufficiently recorded, and to record them where needed",
                    "Collecting and distributing confidential information to the relevant departments in the building",
                    "Tracking and ordering old archived data where applicable"
                ]
            },
            {
                "title": "General Clinical Administrator - Outpatients",
                "company": "Nottingham University Hospitals NHS Trust",
                "location": "Nottingham, UK",
                "type": "on-site",
                "start_date": "2016-12-01",
                "end_date": "2017-10-01",
                "description": [
                    "Regular collection, maintenance and record-keeping of medical case-notes for patient appointment",
                    "Followed strict guidelines in relation to information governance and patient confidentiality",
                    "Inputted large amounts of data accurately and in a time-sensitive capacity",
                    "Communicated both written and verbally to various departments to gather relevant information",
                    "Worked on own direction for extended periods of time to both resolve my own projects as well as work to assist those where necessary",
                    "Use of specialised software for the purpose of fulfilling my role to the fullest extent",
                    "Used my own initiative to resolve unexpected issues to my best ability"
                ]
            },
            {
                "title": "Bar Team Leader",
                "company": "JD Wetherspoon - Lloyds No.1 Bar",
                "location": "Nottingham, UK",
                "type": "on-site",
                "start_date": "2016-07-01",
                "end_date": "2016-12-01",
                "description": [
                    "Served customers as quickly and as professionally as possible",
                    "Dealt with any complaints, damages, injuries, or any other issues that arise",
                    "Managed a team of up to 26 people in a hectic work environment, ensuring all employees are working to the best of their ability and addressing areas that could be improved",
                    "Ensured time-specific jobs were fulfilled to the correct procedure",
                    "Maintained high hygiene and fire safety standards"
                ]
            },
            {
                "title": "Kitchen Associate",
                "company": "JD Wetherspoon - Lloyds No.1 Bar",
                "location": "Nottingham, UK",
                "type": "on-site",
                "start_date": "2014-07-01",
                "end_date": "2016-07-01",
                "description": [
                    "Worked in a team & communicating effectively for the best results",
                    "Followed Standard Operating Procedures that require use of delicate equipment and information in a professional manner",
                    "Filled out food orders to ensure correct stock levels are maintained",
                    "Kept a daily hard-copy of actions performed under company policy"
                ]
            }
        ],
        "education": [
            {
                "school": "University of Brighton",
                "location": "Brighton, UK",
                "studies": [
                    {
                        "degree": "Bachelor of Arts - BA",
                        "start_date": "2011-09-01",
                        "end_date": "2014-07-01",
                        "courses": [
                            {
                                "name": "Architecture",
                                "grade": "Second Class Honours (Upper Division) - 2:1",
                                "description": [
                                    "The implementation, design and history of architecture",
                                    "Technology and building methods",
                                    "Architectural Movements",
                                    "Drawing techniques",
                                    "Model Building",
                                    "UK Building Regulations",
                                    "Writing essays and producing documents using Adobe Suite and CAD software",
                                    "Reprographics and printing methods",
                                    "Time management",
                                    "Photography Skills"
                                ],
                                "activities_and_societies": [
                                    "Activities and societies: Language (Spanish - Foundation) & Intercultural Awareness (Sep 2013 - Jul 2014)",
                                    "Brighton Interior Architecture & Architecture Society (BIAAS) (Sep 2011 - Jul 2014)",
                                    "Student Ambassador (Jul 2013 - Jul 1024)",
                                    "Exhibition Presenter in Brighton Art Degree Show (Jul 2014)",
                                    "Exhibition Steward/Security for Brighton Art Degree Show 2014 (Jul 2014)",
                                    "Build/Design Assistant for Brighton Art Degree Show (Jun 2013, Jun - Jul 2014)",
                                    "Member of Photography Society (Sep 2012 - Jul 2013)"
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "school": "Palmer Catholic Academy (formerly Canon Palmer Catholic School)",
                "location": "Ilford, London, UK",
                "studies": [
                    {
                        "degree": "A Levels",
                        "start_date": "2009-09-01",
                        "end_date": "2011-07-01",
                        "courses": [
                            {
                                "name": "Mathematics",
                                "grade": "A*",
                                "description": [],
                                "activities_and_societies": []
                            },
                            {
                                "name": "Physics",
                                "grade": "A",
                                "description": [],
                                "activities_and_societies": []
                            },
                            {
                                "name": "Art, Craft & Design",
                                "grade": "B",
                                "description": [],
                                "activities_and_societies": []
                            }
                        ]
                    },
                    {
                        "degree": "AS Levels",
                        "start_date": "2009-09-01",
                        "end_date": "2010-07-01",
                        "courses": [
                            {
                                "name": "Information Technology",
                                "grade": "B",
                                "description": [],
                                "activities_and_societies": []
                            }
                        ]
                    },
                    {
                        "degree": "GCSEs",
                        "start_date": "2007-09-01",
                        "end_date": "2009-07-01",
                        "courses": [
                            {
                                "name": "FSMQ - Additional Mathematics",
                                "grade": "A",
                                "description": [],
                                "activities_and_societies": []
                            },
                            {
                                "name": "Art and Design",
                                "grade": "A*",
                                "description": [],
                                "activities_and_societies": []
                            },
                            {
                                "name": "Biology",
                                "grade": "A*",
                                "description": [],
                                "activities_and_societies": []
                            },
                            {
                                "name": "Chemistry",
                                "grade": "A*",
                                "description": [],
                                "activities_and_societies": []
                            },
                            {
                                "name": "Mathematics",
                                "grade": "A*",
                                "description": [],
                                "activities_and_societies": []
                            },
                            {
                                "name": "Physics",
                                "grade": "A*",
                                "description": [],
                                "activities_and_societies": []
                            },
                            {
                                "name": "Statistics",
                                "grade": "A*",
                                "description": [],
                                "activities_and_societies": []
                            },
                            {
                                "name": "English Literature",
                                "grade": "A",
                                "description": [],
                                "activities_and_societies": []
                            },
                            {
                                "name": "Information and Communication Technologies",
                                "grade": "A",
                                "description": [],
                                "activities_and_societies": []
                            },
                            {
                                "name": "Religious Studies",
                                "grade": "A",
                                "description": [],
                                "activities_and_societies": []
                            },
                            {
                                "name": "English Language",
                                "grade": "B",
                                "description": [],
                                "activities_and_societies": []
                            }
                        ]
                    }
                ]
            }
        ],
        "projects": [
            {
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
            },
            {
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
            },
            {
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
            },
            {
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
            },
            {
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
            },
            {
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
            }
        ],
        "skills": [
            { "name": "Angular", "exp": 100 },
            { "name": "TypeScript", "exp": 100 },
            { "name": "SASS", "exp": 100 },
            { "name": "PHP", "exp": 100 },
            { "name": "Ionic Framework", "exp": 100 },
            { "name": "SQL (SQL Server, MySQL, PostgreSQL)", "exp": 100 },
            { "name": "HTML5", "exp": 100 },
            { "name": "CSS3", "exp": 100 },
            { "name": "JavaScript", "exp": 100 },
            { "name": "jQuery", "exp": 100 },
            { "name": "Bootstrap", "exp": 100 },
            { "name": "Git", "exp": 100 },
            { "name": "C#", "exp": 100 },
            { "name": "ASP.NET Core", "exp": 90 },
            { "name": "Entity Framework", "exp": 80 },
            { "name": "RESTful APIs", "exp": 95 },
            { "name": "WordPress", "exp": 75 },
            { "name": "Python", "exp": 65 },
            { "name": "Laravel", "exp": 50 },
            { "name": "React", "exp": 50 },
            { "name": "NoSQL (MongoDB)", "exp": 50 }
        ],
        "courses": [
            {
                "name": "Machine Learning with Python: Foundations",
                "issuing_organisation": "LinkedIn",
                "issue_date": "2023-11-24",
                "credential_link": "https://linkedin.com/learning/certificates/fe4c4e2f0e93f2e131060a7b257a7999b116edaaec68a78a3350f146244f1968?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BvE5y5OAJQVWaNkAcBA1Sdg%3D%3D"
            },
            {
                "name": "AWS DeepRacer: Building a Reinforcement Learning Model",
                "issuing_organisation": "LinkedIn",
                "issue_date": "2023-11-15",
                "credential_link": "https://linkedin.com/learning/certificates/7b0e29d7bdb44e4b727734976fb266719678b833ffef1e25adff46c43faee0e6?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BvE5y5OAJQVWaNkAcBA1Sdg%3D%3D"
            },
            {
                "name": "Artificial Intelligence Foundations: Machine Learning",
                "issuing_organisation": "LinkedIn",
                "issue_date": "2023-11-01",
                "credential_link": "https://linkedin.com/learning/certificates/ffb54cb6199877434f335c410322aabbef0f222903b86792bf75c6f0eb3e707c?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BvE5y5OAJQVWaNkAcBA1Sdg%3D%3D"
            },
            {
                "name": "Using PowerApps with Excel, OneDrive, and SharePoint",
                "issuing_organisation": "Pluralsight",
                "issue_date": "2023-02-02",
                "credential_link": "https://github.com/ChrisWebbDeveloper/cv/blob/main/certificates/using_powerapps_with_excel_onedrive_and_sharepoint.pdf"
            },
            {
                "name": "Angular Patterns & Best Practices",
                "issuing_organisation": "Pluralsight",
                "issue_date": "2022-12-02",
                "credential_link": "https://github.com/ChrisWebbDeveloper/cv/blob/main/certificates/angular_patterns_%26_best_practices.pdf"
            },
            {
                "name": "Angular Forms",
                "issuing_organisation": "Pluralsight",
                "issue_date": "2022-12-01",
                "credential_link": "https://github.com/ChrisWebbDeveloper/cv/blob/main/certificates/angular_forms.pdf"
            },
            {
                "name": "JavaScript Promises and Async Programming",
                "issuing_organisation": "Pluralsight",
                "issue_date": "2022-11-30",
                "credential_link": "https://github.com/ChrisWebbDeveloper/cv/blob/main/certificates/javascript_promises_and_async_programming.pdf"
            },
            {
                "name": "ASP.NET Core Fundamentals",
                "issuing_organisation": "Pluralsight",
                "issue_date": "2021-06-09",
                "credential_link": "https://github.com/ChrisWebbDeveloper/cv/blob/main/certificates/aspnet_core_fundamentals.pdf"
            },
            {
                "name": "Creating Object-oriented TypeScript Code",
                "issuing_organisation": "Pluralsight",
                "issue_date": "2021-02-24",
                "credential_link": "https://github.com/ChrisWebbDeveloper/cv/blob/main/certificates/creating_object-oriented_typescript_code.pdf"
            },
            {
                "name": "Getting Started with Laravel (PHP Framework) 7 - The Basics",
                "issuing_organisation": "Pluralsight",
                "issue_date": "2021-02-05",
                "credential_link": "https://github.com/ChrisWebbDeveloper/cv/blob/main/certificates/getting_started_with_laravel_php_framework_7_-_the_basics.pdf"
            },
            {
                "name": "High Performance PHP",
                "issuing_organisation": "Pluralsight",
                "issue_date": "2020-11-30",
                "credential_link": "https://github.com/ChrisWebbDeveloper/cv/blob/main/certificates/high_performance_php.pdf"
            },
            {
                "name": "React 17: Getting Started",
                "issuing_organisation": "Pluralsight",
                "issue_date": "2020-11-03",
                "credential_link": "https://github.com/ChrisWebbDeveloper/cv/blob/main/certificates/react_17_getting_started.pdf"
            },
            {
                "name": "RESTful Web Services with PHP and Laravel 7",
                "issuing_organisation": "Pluralsight",
                "issue_date": "2020-10-07",
                "credential_link": "https://github.com/ChrisWebbDeveloper/cv/blob/main/certificates/restful_web_services_with_php_and_laravel_7.pdf"
            },
            {
                "name": "React: The Big Picture",
                "issuing_organisation": "Pluralsight",
                "issue_date": "2020-05-29",
                "credential_link": "https://github.com/ChrisWebbDeveloper/cv/blob/main/certificates/react_the_big_picture.pdf"
            },
            {
                "name": "TypeScript 4: Getting Started",
                "issuing_organisation": "Pluralsight",
                "issue_date": "2020-05-28",
                "credential_link": "https://github.com/ChrisWebbDeveloper/cv/blob/main/certificates/typescript_4_getting_started.pdf"
            },
            {
                "name": "TypeScript: The Big Picture",
                "issuing_organisation": "Pluralsight",
                "issue_date": "2020-04-16",
                "credential_link": "https://github.com/ChrisWebbDeveloper/cv/blob/main/certificates/typescript_the_big_picture.pdf"
            },
            {
                "name": "C# Fundamentals",
                "issuing_organisation": "Pluralsight",
                "issue_date": "2019-11-22",
                "credential_link": "https://github.com/ChrisWebbDeveloper/cv/blob/main/certificates/csharp_fundamentals.pdf"
            },
            {
                "name": "Python: Getting Started",
                "issuing_organisation": "Pluralsight",
                "issue_date": "2019-11-05",
                "credential_link": "https://github.com/ChrisWebbDeveloper/cv/blob/main/certificates/python_getting_started.pdf"
            },
            {
                "name": "Building Applications with ASP.NET MVC 4",
                "issuing_organisation": "Pluralsight",
                "issue_date": "2019-01-22",
                "credential_link": "https://github.com/ChrisWebbDeveloper/cv/blob/main/certificates/building_applications_with_aspnet_mvc_4.pdf"
            },
            {
                "name": "Angular: Getting Started",
                "issuing_organisation": "Pluralsight",
                "issue_date": "2018-11-20",
                "credential_link": "https://github.com/ChrisWebbDeveloper/cv/blob/main/certificates/angular_getting_started.pdf"
            },
            {
                "name": "Angular 6: The Big Picture",
                "issuing_organisation": "Pluralsight",
                "issue_date": "2018-10-25",
                "credential_link": "https://github.com/ChrisWebbDeveloper/cv/blob/main/certificates/angular_6_the_big_picture.pdf"
            },
            {
                "name": "The Complete Web Developer Course 2.0",
                "issuing_organisation": "Udemy",
                "issue_date": "2018-10-13",
                "credential_link": "https://udemy.com/certificate/UC-4R4U4I6C/"
            },
            {
                "name": "ASP.NET MVC 5 Fundamentals",
                "issuing_organisation": "Pluralsight",
                "issue_date": "2018-07-12",
                "credential_link": "https://github.com/ChrisWebbDeveloper/cv/blob/main/certificates/aspnet_mvc_5_fundamentals.pdf"
            },
            {
                "name": "Advanced Databases and SQL Querying",
                "issuing_organisation": "Udemy",
                "issue_date": "2018-05-01",
                "credential_link": "https://udemy.com/certificate/UC-D9DA83BP/"
            },
            {
                "name": "Introduction to Databases and SQL Querying",
                "issuing_organisation": "Udemy",
                "issue_date": "2018-01-16",
                "credential_link": "https://udemy.com/certificate/UC-CR9LU2N0/"
            }
        ]
    };
    const homeDetails: HomeDetails = new HomeDetails(data.name, data.blurb);
    const aboutDetails: AboutDetails = new AboutDetails(data.about_me.long_form, data.title);
    const skills: Skill[] = sortSkills(data.skills.map(skill => new Skill(skill)));
    const projects: Project[] = sortProjects(data.projects.map(project => new Project(project)));
    const contactDetails: ContactDetails = new ContactDetails(data.contact_details);

    beforeEach(async () => {
        dataSpy = jasmine.createSpyObj(DataService, ['getData']);
        dataSpy.getData.and.returnValue(of(data));

        await TestBed.configureTestingModule({
            imports: [AppComponent],
            providers: [
                {provide: DataService, useValue: dataSpy}
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(AppComponent);
        app = fixture.componentInstance;
    });

    describe(`Component`, () => {
        it(`should create the app`, () => {
            expect(app).toBeTruthy();
        });
    });

    describe(`loading`, () => {
        it(`should be included as a property`, () => {
            expect(app.loading).toBeTruthy();
        });

        it(`should be set to true by default`, () => {
            expect(app.loading).toBeTrue();
        });
    });

    describe(`contentFound`, () => {
        it(`should be included as a property`, () => {
            app.contentFound = true;
            expect(app.contentFound).toBeTruthy();
        });

        it(`should be set to true by default`, () => {
            expect(app.contentFound).toBeFalse();
        });
    });

    describe(`homeDetails`, () => {
        beforeEach(() => {
            app.homeDetails = homeDetails;
        });

        it(`should be included as a property`, () => {
            expect(app.homeDetails).toBeTruthy();
        });

        it(`should be of type 'HomeDetails'`, () => {
            expect(app.homeDetails).toEqual(homeDetails);
        });
    });

    describe(`aboutDetails`, () => {
        beforeEach(() => {
            app.aboutDetails = aboutDetails;
        });

        it(`should be included as a property`, () => {
            expect(app.aboutDetails).toBeTruthy();
        });

        it(`should be of type 'AboutDetails'`, () => {
            expect(app.aboutDetails).toEqual(aboutDetails);
        });
    });

    describe(`skills`, () => {
        beforeEach(() => {
            app.skills = skills;
        });

        it(`should be included as a property`, () => {
            expect(app.skills).toBeTruthy();
        });

        it(`should be of type 'Skill[]'`, () => {
            expect(app.skills!).toEqual(skills);
        });
    });

    describe(`projects`, () => {
        beforeEach(() => {
            app.projects = projects;
        });

        it(`should be included as a property`, () => {
            expect(app.projects).toBeTruthy();
        });

        it(`should be of type 'Project[]'`, () => {
            expect(app.projects!).toEqual(projects);
        });
    });

    describe(`contactDetails`, () => {
        beforeEach(() => {
            app.contactDetails = contactDetails;
        });

        it(`should be included as a property`, () => {
            expect(app.contactDetails).toBeTruthy();
        });

        it(`should be of type 'ContactDetails'`, () => {
            expect(app.contactDetails).toEqual(contactDetails);
        });
    });

    describe(`ngOnInit`, () => {
        beforeEach(() => {
            fixture.detectChanges();
        });

        it(`should included as a method`, () => {
            expect(app.ngOnInit).toBeTruthy();
        });

        it(`should call the DataService's getData method`, () => {
            expect(dataSpy.getData).toHaveBeenCalledTimes(1);
        });

        it(`should set 'loading' to false if 'getData()' is successful`, () => {
            expect(app.loading).toBeFalse();
        });

        it(`should set 'contentFound' to true if 'getData()' is successful`, () => {
            expect(app.contentFound).toBeTrue();
        });

        it(`should set 'homeDetails' to a HomeDetails object based on the values retrieved (if 'getData()' is successful)`, () => {
            expect(app.homeDetails).toEqual(homeDetails);
        });

        it(`should set 'aboutDetails' to a AboutDetails object based on the values retrieved (if 'getData()' is successful)`, () => {
            expect(app.aboutDetails).toEqual(aboutDetails);
        });

        it(`should set 'skills' to 'Skill[]' based on the values retrieved (if 'getData()' is successful)`, () => {
            expect(sortSkills(app.skills!)).toEqual(skills);
        });

        it(`should set 'projects' to 'Project[]' based on the values retrieved (if 'getData()' is successful)`, () => {
            expect(sortProjects(app.projects!)).toEqual(sortProjects(projects));
        });

        it(`should set 'contactDetails' to a ContactDetails object based on the values retrieved (if 'getData()' is successful)`, () => {
            expect(app.contactDetails).toEqual(contactDetails);
        });

        it(`should set 'loading' to false if 'getData()' fails`, () => {
            dataSpy.getData.and.returnValue(throwError(() => new Error('error')));
            app.ngOnInit();
            expect(app.loading).toBeFalse();
        });

        it(`should set 'contentFound' to false if 'getData()' fails`, () => {
            dataSpy.getData.and.returnValue(throwError(() => new Error('error')));
            app.ngOnInit();
            expect(app.contentFound).toBeFalse();
        });
    });

    describe(`HTML`, () => {
        beforeEach(() => {
            fixture.detectChanges();
        });

        it(`should display a spinner while the content is loading`, () => {
            function getSpinner(): HTMLElement | null {
                const element: HTMLElement = fixture.nativeElement;
                return element.querySelector('.spinner-border');
            };

            app.loading = true;
            fixture.detectChanges();
            expect(getSpinner()).toBeTruthy();

            app.loading = false;
            fixture.detectChanges();
            expect(getSpinner()).toBeNull();
        });

        it(`should display error content if the content is loaded with an error`, () => {
            function getErrorMsg(): HTMLElement | null {
                const element: HTMLElement = fixture.nativeElement;
                return element.querySelector('.text-danger');
            };

            app.loading = false;
            app.contentFound = false;
            fixture.detectChanges();
            expect(getErrorMsg()).toBeTruthy();

            app.loading = true;
            fixture.detectChanges();
            expect(getErrorMsg()).toBeNull();
        });

        it(`should include the website name in the error content`, () => {
            app.loading = false;
            app.contentFound = false;
            fixture.detectChanges();

            const element: HTMLElement = fixture.nativeElement;
            const webName: HTMLElement | null = element.querySelector('h1');
            expect(webName?.textContent).toEqual('Chris Webb Developer');
        });

        it(`should include a suitable error message in the error content`, () => {
            app.loading = false;
            app.contentFound = false;
            fixture.detectChanges();

            const element: HTMLElement = fixture.nativeElement;
            const message: HTMLElement | null = element.querySelector('h5');
            expect(message?.textContent).toEqual('Content could not be found at this time. Please try again later');
        });

        it(`should display the web content if the content is loaded successfully`, () => {
            const element: DebugElement = fixture.debugElement;
            const headerElem: DebugElement = element.query(By.directive(HeaderComponent));
            expect(headerElem).toBeTruthy();

            const homeElem: DebugElement = element.query(By.directive(HomeComponent));
            expect(homeElem).toBeTruthy();

            const aboutElem: DebugElement = element.query(By.directive(AboutMeComponent));
            expect(aboutElem).toBeTruthy();

            const projectsElem: DebugElement = element.query(By.directive(AllProjectsComponent));
            expect(projectsElem).toBeTruthy();

            const contactsElem: DebugElement = element.query(By.directive(ContactComponent));
            expect(contactsElem).toBeTruthy();

            const footerElem: DebugElement = element.query(By.directive(FooterComponent));
            expect(footerElem).toBeTruthy();
        });

        it(`should contain the HeaderComponent (if loaded successfully)`, () => {
            const element: DebugElement = fixture.debugElement;
            const headerElem: DebugElement = element.query(By.directive(HeaderComponent));
            expect(headerElem).toBeTruthy();
        });

        it(`should contain a scrollspy (if loaded successfully)`, () => {
            const element: HTMLElement = fixture.nativeElement;
            const scrollSpy: HTMLElement | null = element.querySelector(':scope > div');
            expect(scrollSpy?.getAttribute('data-bs-spy')).toEqual('scroll');
        });

        it(`should scroll based on the navbar (if loaded successfully)`, () => {
            const element: HTMLElement = fixture.nativeElement;
            const scrollSpy: HTMLElement | null = element.querySelector(':scope > div');
            expect(scrollSpy?.getAttribute('data-bs-target')).toEqual('.navbar');
        });

        it(`should contain the HomeComponent (if loaded successfully)`, () => {
            const element: DebugElement = fixture.debugElement;
            const homeElem: DebugElement = element.query(By.directive(HomeComponent));
            expect(homeElem).toBeTruthy();
        });

        it(`should pass the 'homeDetails' property into the HomeComponent's 'details' attribute (if loaded successfully)`, () => {
            const element: DebugElement = fixture.debugElement;
            const homeElem: DebugElement = element.query(By.directive(HomeComponent));
            const homeComp: HomeComponent = homeElem.componentInstance;
            expect(homeComp.details).toEqual(homeDetails);
        });

        it(`should pass the 'contactDetails' property into the HomeComponent's 'contacts' attribute (if loaded successfully)`, () => {
            const element: DebugElement = fixture.debugElement;
            const contactsElem: DebugElement = element.query(By.directive(ContactComponent));
            const contactsComp: ContactComponent = contactsElem.componentInstance;
            expect(contactsComp.details).toEqual(contactDetails);
        });

        it(`should contain the AboutMeComponent (if loaded successfully)`, () => {
            const element: DebugElement = fixture.debugElement;
            const aboutElem: DebugElement = element.query(By.directive(AboutMeComponent));
            expect(aboutElem).toBeTruthy();
        });

        it(`should pass the 'aboutDetails' property into the AboutComponent's 'details' attribute (if loaded successfully)`, () => {
            const element: DebugElement = fixture.debugElement;
            const aboutElem: DebugElement = element.query(By.directive(AboutMeComponent));
            const aboutComp: AboutMeComponent = aboutElem.componentInstance;
            expect(aboutComp.details).toEqual(aboutDetails);
        });

        it(`should pass the 'skills' property into the AboutComponent's 'skills' attribute (if loaded successfully)`, () => {
            const element: DebugElement = fixture.debugElement;
            const aboutElem: DebugElement = element.query(By.directive(AboutMeComponent));
            const aboutComp: AboutMeComponent = aboutElem.componentInstance;
            expect(sortSkills(aboutComp.skills)).toEqual(skills);
        });

        it(`should contain the AllProjectsComponent (if loaded successfully)`, () => {
            const element: DebugElement = fixture.debugElement;
            const projectsElem: DebugElement = element.query(By.directive(AllProjectsComponent));
            expect(projectsElem).toBeTruthy();
        });

        it(`should pass the 'projects' property into the AllProjectsComponent's 'projects' attribute (if loaded successfully)`, () => {
            const element: DebugElement = fixture.debugElement;
            const projectsElem: DebugElement = element.query(By.directive(AllProjectsComponent));
            const projectsComp: AllProjectsComponent = projectsElem.componentInstance;
            expect(sortProjects(projectsComp.projects)).toEqual(projects);
        });

        it(`should contain the ContactComponent (if loaded successfully)`, () => {
            const element: DebugElement = fixture.debugElement;
            const contactsElem: DebugElement = element.query(By.directive(ContactComponent));
            expect(contactsElem).toBeTruthy();
        });

        it(`should pass the 'contactDetails' property into the ContactComponent's 'details' attribute (if loaded successfully)`, () => {
            const element: DebugElement = fixture.debugElement;
            const contactsElem: DebugElement = element.query(By.directive(ContactComponent));
            const contactsComp: ContactComponent = contactsElem.componentInstance;
            expect(contactsComp.details).toEqual(contactDetails);
        });

        it(`should contain the FooterComponent (if loaded successfully)`, () => {
            const element: DebugElement = fixture.debugElement;
            const footerElem: DebugElement = element.query(By.directive(FooterComponent));
            expect(footerElem).toBeTruthy();
        });
    });
});
