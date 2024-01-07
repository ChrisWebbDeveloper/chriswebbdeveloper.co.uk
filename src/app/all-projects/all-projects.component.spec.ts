import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AllProjectsComponent } from './all-projects.component';
import { of } from 'rxjs';
import { Project } from '../models/project';
import { ProjectComponent } from '../project/project.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('AllProjectsComponent', () => {
    let fixture: ComponentFixture<AllProjectsComponent>;
    let component: AllProjectsComponent;
    let projects: Project[];
    let techsList: string[];
    let sortProjectsSpy: jasmine.Spy;
    let getTechsListSpy: jasmine.Spy;
    let setSelectedTechSpy: jasmine.Spy;
    let eventSpy: jasmine.SpyObj<Event>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AllProjectsComponent]
        })
        .compileComponents();

        fixture = TestBed.createComponent(AllProjectsComponent);
        component = fixture.componentInstance;
        projects = [
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
        ];
        techsList = [
            "Angular",
            "ASP.NET Core 5",
            "Bootstrap",
            "C#",
            "CSS3",
            "Entity Framework",
            "GIMP",
            "Godot",
            "Gulp.js",
            "HTML5",
            "JavaScript",
            "jQuery",
            "Laravel",
            "MySQL",
            "PHP",
            "Python",
            "React",
            "SASS",
            "SQLite",
            "TypeScript",
            "Unity",
            "WordPress",
        ];
        component.projects = projects;
        sortProjectsSpy = spyOn(component, 'sortProjects').and.callThrough();
        getTechsListSpy = spyOn(component, 'getTechsList').and.callThrough();
        setSelectedTechSpy = spyOn(component, 'setSelectedTech').and.callThrough();
        eventSpy = jasmine.createSpyObj(Event, ['preventDefault']);
    });

    describe(`Component`, () => {
        it('should create', () => {
            expect(component).toBeTruthy();
        });
    });

    describe(`projects`, () => {
        it(`should be included as a property`, () => {
            expect(component.projects).toBeTruthy();
        });

        it(`should be a type of Project[]`, () => {
            expect(component.projects).toEqual(projects);
        });
    });

    describe(`techsList`, () => {
        it(`should be included as a property`, () => {
            expect(component.techsList).toBeTruthy();
        });

        it(`should be a type of string[]`, () => {
            component.techsList = techsList;
            expect(component.techsList).toEqual(techsList);

            component.techsList.forEach(tech => {
                expect(typeof tech).toEqual('string');
            });
        });
    });

    describe(`selectedTech`, () => {
        it(`should be included as a property`, () => {
            expect(component.selectedTech).toBeTruthy();
        });
        
        it(`should default to 'All'`, () => {
            expect(component.selectedTech).toEqual('All');
        });
    });

    describe(`ngOnInit`, () => {
        beforeEach(() => {
            component.ngOnInit();
        });

        it(`should call the 'sortProjects()' method`, () => {
            expect(sortProjectsSpy).toHaveBeenCalledTimes(1);
        });

        it(`should call the 'getTechsList()' method`, () => {
            expect(getTechsListSpy).toHaveBeenCalledTimes(1);
        });
    });

    describe(`sortProjects`, () => {
        it(`should sort projects from most recent to least recent, then by newest created to oldest created, then by name alphabetically in terms of priority`, () => {
            component.sortProjects();
            for (let i = 0; i < component.projects.length; i++) {
                expect(component.projects[i]).toEqual(projects[i]);
            };
        });
    });

    describe(`getTechsList`, () => {
        it(`should set the 'techsList' property to a complete list of all the unique technologies in each project's 'techStack'`, () => {
            expect(component.techsList).toEqual([]);

            component.getTechsList();
            expect(component.techsList).toEqual(techsList);
        });

        it(`should sort the 'techsList' property alphabetically`, () => {
            component.getTechsList();
            expect(component.techsList).toEqual(techsList);
        });
    });

    describe(`setSelectedTech`, () => {
        it(`should prevent the default action of the 'event' parameter`, () => {
            component.setSelectedTech(eventSpy, component.techsList[0]);
            expect(eventSpy.preventDefault).toHaveBeenCalledTimes(1);
        });

        it(`should set the 'selectedTech' property to the tech string passed in if it doesn't match`, () => {
            component.selectedTech = 'All';
            component.setSelectedTech(eventSpy, component.techsList[0]);
            expect(component.selectedTech).toEqual(component.techsList[0]);
        });

        it(`should set the 'selectedTech' property to the 'All' the tech string passed in matches it`, () => {
            component.selectedTech = component.techsList[0];
            component.setSelectedTech(eventSpy, component.techsList[0]);
            expect(component.selectedTech).toEqual('All');

            component.selectedTech = 'All';
            component.setSelectedTech(eventSpy, 'All');
            expect(component.selectedTech).toEqual('All');
        });
    });

    describe(`HTML`, () => {
        beforeEach(() => {
            fixture.detectChanges();
        });

        it(`should only display the content if the 'project' property is set and contains at least one project`, () => {
            function getDiv(): HTMLElement | null {
                const element: HTMLElement = fixture.nativeElement;
                return element.querySelector(':scope > div');
            };

            expect(getDiv()).toBeTruthy();

            component.projects = [];
            fixture.detectChanges();
            expect(getDiv()).toBeNull();
        });

        it(`should have a suitable title`, () => {
            const element: HTMLElement = fixture.nativeElement;
            const h2: HTMLElement | null = element.querySelector('h2');
            expect(h2?.textContent).toEqual('Projects');
        });

        it(`should have a button group containing all of the 'techsList' options and an 'All' button`, () => {
            const element: HTMLElement = fixture.nativeElement;
            const btnGroup: HTMLElement | null = element.querySelector('.btn-group');
            expect(btnGroup).toBeTruthy();
        });

        it(`should have the relevant button selected if the 'selectedTech' matches the button's technology`, async () => {
            component.selectedTech = component.techsList[0];
            fixture.detectChanges();
            fixture.whenStable().then(() => {
                const element: HTMLElement = fixture.nativeElement;
                const inputs: NodeListOf<HTMLInputElement> = element.querySelectorAll('[aria-label="Tech List"] > input');
                const selected: HTMLInputElement = Array.from(inputs).filter(x => x.checked)[0];
                const label: HTMLElement | null = selected.parentElement!.querySelector(`label[for="${selected.id}"]`);

                expect(label?.textContent).toEqual(component.selectedTech);
            });
        });

        it(`should call the 'setSelectedTech()' method on clicking each button, passing in the Event and the relevant technology's name`, async () => {
            fixture.whenStable().then(() => {
                const element: HTMLElement = fixture.nativeElement;
                const labels: NodeListOf<HTMLElement> = element.querySelectorAll('[aria-label="Tech List"] > label');

                labels.forEach(label => {
                    setSelectedTechSpy.calls.reset();
                    const event: Event = new Event('click');
                    label.dispatchEvent(event);
                    expect(setSelectedTechSpy).toHaveBeenCalledWith(event, label.textContent);
                });
            });
        });

        it(`should include each project as a 'ProjectComponent'`, () => {
            const element: DebugElement = fixture.debugElement;
            const projectElems: DebugElement[] = element.queryAll(By.directive(ProjectComponent));
            expect(projectElems.length).toEqual(component.projects.length);
        });

        it(`should only display the projects that include the 'selectedTech'`, async () => {
            component.selectedTech = techsList[0];
            fixture.detectChanges();
            fixture.whenStable().then(() => {
                const element: HTMLElement = fixture.nativeElement;
                const projectElems: NodeListOf<HTMLElement> = element.querySelectorAll('app-project');

                const projectsWithTech = component.projects.filter(x => x.techStack.includes(techsList[0]));
                expect(projectElems.length).toEqual(projectsWithTech.length);
            });
        });

        it(`should pass the 'selectedTech' property in as each ProjectComponent's 'selectedTech' attribute, two-way binding it`, () => {
            const element: DebugElement = fixture.debugElement;
            const projectElems: DebugElement[] = element.queryAll(By.directive(ProjectComponent));

            projectElems.forEach(projectElem => {
                const projectComp = projectElem.componentInstance;
                expect(projectComp.selectedTech).toEqual(component.selectedTech);
            });
        });

        it(`should pass the 'setSelectedTech' method into each ProjectComponent's 'selectedTechMethod' attribute`, () => {
            const element: DebugElement = fixture.debugElement;
            const projectElems: DebugElement[] = element.queryAll(By.directive(ProjectComponent));

            projectElems.forEach(projectElem => {
                const projectComp = projectElem.componentInstance;
                expect(projectComp.selectedTechMethod).toEqual(component.setSelectedTech);
            });
        });
    });
});
