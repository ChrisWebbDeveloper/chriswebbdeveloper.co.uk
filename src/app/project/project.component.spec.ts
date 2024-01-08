import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectComponent } from './project.component';
import { Project } from '../models/project';
import { EventEmitter } from '@angular/core';

describe('ProjectComponent', () => {
    let fixture: ComponentFixture<ProjectComponent>;
    let component: ProjectComponent;
    let project: Project;
    let eventEmitter: EventEmitter<string>;
    let selectedTechChangeSpy: jasmine.Spy;
    let selectedTechMethodSpy: jasmine.Spy;
    let setSelectedTechSpy: jasmine.Spy;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ProjectComponent]
        })
        .compileComponents();

        fixture = TestBed.createComponent(ProjectComponent);
        component = fixture.componentInstance;
        project = new Project({
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
        });
        component.project = project;

        eventEmitter = new EventEmitter<string>();
        component.selectedTechChange = eventEmitter;

        selectedTechChangeSpy = spyOn(component.selectedTechChange, 'emit').and.callThrough();

        selectedTechMethodSpy = jasmine.createSpy();
        component.selectedTechMethod = selectedTechMethodSpy;

        setSelectedTechSpy = spyOn(component, 'setSelectedTech').and.callThrough();
    });

    describe(`Component`, () => {
        it(`should create`, () => {
            expect(component).toBeTruthy();
        });
    });

    describe(`project`, () => {
        it(`should be included as a property`, () => {
            expect(component.project).toBeTruthy();
        });

        it(`should be of type 'Project'`, () => {
            expect(component.project).toEqual(project);
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

    describe(`selectedTechChange`, () => {
        it(`should be included as a property`, () => {
            expect(component.selectedTechChange).toBeTruthy();
        });

        it(`should be a new EventEmitter`, () => {
            expect(component.selectedTechChange).toEqual(eventEmitter);
        });
    });

    describe(`selectedTechMethod`, () => {
        it(`should be included as a property`, () => {
            expect(component.selectedTechMethod).toBeTruthy();
        });

        it(`should be of type 'Function'`, () => {
            expect(component.selectedTechMethod).toEqual(selectedTechMethodSpy);
        });
    });

    describe(`setSelectedTech`, () => {
        const event: Event = new Event('event');
        const tech: string = 'tech';

        beforeEach(() => {
            component.setSelectedTech(event, tech);
        });

        it(`should be included as a method`, () => {
            expect(component.setSelectedTech).toBeTruthy();
        });

        it(`should call the 'selectedTechMethod()', passing in the 'event' and 'tech' parameters`, () => {
            expect(selectedTechMethodSpy).toHaveBeenCalledOnceWith(event, tech);
        });

        it(`should emit the 'selectedTech' property on 'selectedTechChange', ensuring the state change is passed back`, () => {
            expect(selectedTechChangeSpy).toHaveBeenCalledOnceWith(component.selectedTech);
        });
    });

    describe(`HTML`, () => {
        beforeEach(() => {
            fixture.detectChanges();
        });

        it(`should include the project's image via its 'img' property if it is available`, () => {
            function getImg(): HTMLImageElement | null {
                const element: HTMLElement = fixture.nativeElement;
                return element.querySelector('img');
            };

            expect(getImg()).toBeTruthy();

            component.project.title = '';
            fixture.detectChanges();
            expect(getImg()).toBeNull();
        });

        it(`should set the image's 'src' attribute using the to the project's 'getImgUrl()' method`, () => {
            function getImg(): HTMLImageElement | null {
                const element: HTMLElement = fixture.nativeElement;
                return element.querySelector('img');
            };

            const partialUrl = component.project.getImgUrl().replace('../..', '');
            expect(getImg()?.src.includes(partialUrl)).toBeTrue();
        });

        it(`should give the image a suitable 'alt' attribute based on the project's title`, () => {
            function getImg(): HTMLImageElement | null {
                const element: HTMLElement = fixture.nativeElement;
                return element.querySelector('img');
            };

            expect(getImg()?.alt).toEqual(`${project.title} Image`);
        });

        it(`should include the project's 'title' property as a title on the component`, () => {
            const element: HTMLElement = fixture.nativeElement;
            const title: HTMLElement | null = element.querySelector('h3');
            expect(title?.textContent).toEqual(project.title);
        });

        it(`should include the date the project started and ended using the 'getStartDateFormatted()' and 'getEndDateFormatted()' methods on the Project, separated by a hyphen`, () => {
            const element: HTMLElement = fixture.nativeElement;
            const title: HTMLElement | null = element.querySelector('h3');
            const dates: HTMLElement | null = title!.parentElement!.querySelector('p');
            expect(dates?.textContent).toEqual(`${project.getStartDateFormatted()} - ${project.getEndDateFormatted()}`);
        });

        it(`should display a link to the project if one is available`, () => {
            function getLink(): HTMLAnchorElement | null {
                const element: HTMLElement = fixture.nativeElement;
                return element.querySelector('a');
            };

            expect(getLink()).toBeTruthy();

            project.link = undefined;
            fixture.detectChanges();
            expect(getLink()).toBeNull();
        });

        it(`should open the link in a new tab when clicked (if available)`, () => {
            const element: HTMLElement = fixture.nativeElement;
            const link: HTMLAnchorElement | null = element.querySelector('a');
            expect(link?.href).toEqual(project.link);
            expect(link?.target).toEqual('_blank');
        });

        it(`should include the 'description' as separate paragraphs`, () => {
            const element: HTMLElement = fixture.nativeElement;
            const paragraphs: NodeListOf<HTMLElement> = element.querySelectorAll('p');
            const description: HTMLElement[] = Array.from(paragraphs);
            description.shift();

            for (let i = 0; i < description.length; i++) {
                expect(description[i].textContent).toEqual(project.description[i]);
            };
        });

        it(`should display the 'techStack' if one is available`, () => {
            const element: HTMLElement = fixture.nativeElement;
            const title: HTMLElement | null = element.querySelector('h4');
            expect(title).toBeTruthy();
        });
        
        it(`should have a suitable title for the Tech Stack (if available)`, () => {
            const element: HTMLElement = fixture.nativeElement;
            const title: HTMLElement | null = element.querySelector('h4');
            expect(title?.textContent).toEqual('Tech Stack');
        });

        it(`should display each item in the 'techStack' as a separate button`, () => {
            const element: HTMLElement = fixture.nativeElement;
            const buttons: NodeListOf<HTMLElement> = element.querySelectorAll('label');
            expect(buttons.length).toEqual(component.project.techStack.length);
        });

        it(`should include the tech name in each 'techStack' button`, () => {
            const element: HTMLElement = fixture.nativeElement;
            const buttons: NodeListOf<HTMLElement> = element.querySelectorAll('label');

            for (let i = 0; i < buttons.length; i++) {
                expect(buttons[i].textContent).toEqual(project.techStack[i]);
            };
        });

        it(`should highlight the button if it matches the 'selectedTech' property`, async () => {
            const tech = component.project.techStack[0]
            component.selectedTech = tech;
            fixture.detectChanges();
            fixture.whenStable().then(() => {
                const element: HTMLElement = fixture.nativeElement;
                const inputs: NodeListOf<HTMLInputElement> = element.querySelectorAll('input');
                const selected: HTMLElement | undefined = Array.from(inputs).filter(x => x.checked)[0];
                const label: HTMLElement | null = selected.parentElement!.querySelector(`label[for="${selected.id}"]`);

                expect(label?.textContent).toEqual(tech);
            });
        });

        it(`should not highlight any buttons if the 'selectedTech' property is 'All'`, async () => {
            component.selectedTech = 'All';
            fixture.detectChanges();
            fixture.whenStable().then(() => {
                const element: HTMLElement = fixture.nativeElement;
                const inputs: NodeListOf<HTMLInputElement> = element.querySelectorAll('input');
                const selected: HTMLElement | undefined = Array.from(inputs).filter(x => x.checked)[0];

                expect(selected).toBeUndefined();
            });
        });

        it(`should call the 'setSelectedTech()' method when a 'techStack' button is clicked, passing in the '$event' and relevant technology`, async () => {
            fixture.whenStable().then(() => {
                const element: HTMLElement = fixture.nativeElement;
                const labels: NodeListOf<HTMLElement> = element.querySelectorAll('label');

                labels.forEach(label => {
                    setSelectedTechSpy.calls.reset();
                    const event: Event = new Event('click');
                    label.dispatchEvent(event);
                    expect(setSelectedTechSpy).toHaveBeenCalledWith(event, label.textContent);
                });
            });
        });
    });
});
