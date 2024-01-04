import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutMeComponent } from './about-me.component';
import { AboutDetails } from '../models/about-details';
import { Skill } from '../models/skill';
import { SkillsComponent } from '../skills/skills.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('AboutMeComponent', () => {
    let fixture: ComponentFixture<AboutMeComponent>;
    let component: AboutMeComponent;
    let title: string;
    const details: AboutDetails = new AboutDetails('Test about me\nstring', 'Test title');
    const skills: Skill[] = [
        new Skill({name: 'C#', exp: 85}),
        new Skill({name: 'PHP', exp: 100}),
        new Skill({name: 'Angular', exp: 0}),
        new Skill({name: 'JavaScript', exp: 60}),
        new Skill({name: 'HTML5', exp: 20})
    ];

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AboutMeComponent]
        })
        .compileComponents();

        fixture = TestBed.createComponent(AboutMeComponent);
        component = fixture.componentInstance;
        component.details = details;
        component.skills = skills;
        title = `I'm Chris, a ${details.title}`;
    });

    describe(`Component`, () => {
        it(`should create`, () => {
            expect(component).toBeTruthy();
        });
    });

    describe(`details`, () => {
        it(`should be included as a property`, () => {
            expect(component.details).toBeTruthy();
        });

        it(`should be of type 'AboutDetails'`, () => {
            expect(component.details).toEqual(details);
        });
    });

    describe(`skills`, () => {
        it(`should be included as a property`, () => {
            expect(component.skills).toBeTruthy();
        });

        it(`should be of type 'Skills[]'`, () => {
            expect(component.skills).toEqual(skills);
        });
    });

    describe(`title`, () => {
        it(`should be included as a property`, () => {
            expect(component.title).toBeTruthy();
        });

        it(`should be set by default to 'About Me'`, () => {
            expect(component.title).toEqual(`About Me`);
        });
    });

    describe(`ngOnInit`, () => {
        beforeEach(() => {
            fixture.detectChanges();
        });

        it(`should be included as a method`, () => {
            expect(component.ngOnInit).toBeTruthy();
        });

        it(`should set the 'title' property based on title in the 'details' property if available`, () => {
            expect(component.title).toEqual(title);
        });
    });

    describe(`HTML`, () => {
        beforeEach(() => {
            fixture.detectChanges();
        });

        it(`should only display the content if the 'details' property is available`, () => {
            function getDiv(): HTMLElement | null {
                const element: HTMLElement = fixture.nativeElement;
                return element.querySelector('div');
            };

            expect(getDiv()).toBeTruthy();

            //@ts-expect-error
            component.details = undefined;
            fixture.detectChanges();
            expect(getDiv()).toBeNull();
        });

        it(`should display the 'title' property`, () => {
            const element: HTMLElement = fixture.nativeElement;
            const titleElem: HTMLElement | null = element.querySelector('h2');
            expect(titleElem?.textContent).toEqual(title);
        });

        it(`should display each string in 'aboutMe' as a separate paragraph`, () => {
            const element: HTMLElement = fixture.nativeElement;
            const aboutMeDiv: HTMLElement = element.querySelector(':scope > div > div')!;
            const paragraphs: NodeListOf<HTMLElement> = aboutMeDiv.querySelectorAll('p');

            for(let i = 0; i < paragraphs.length; i++) {
                expect(paragraphs[i].textContent).toEqual(details.aboutMe[i]);
            };
        });

        it(`should include the 'Skills' Component`, () => {
            const element: DebugElement = fixture.debugElement;
            const skillsElem: DebugElement = element.query(By.directive(SkillsComponent));
            expect(skillsElem).toBeTruthy();
        });

        it(`should pass the 'skills' property into the 'Skills' component as its 'skills' property`, () => {
            const element: DebugElement = fixture.debugElement;
            const skillsElem: DebugElement = element.query(By.directive(SkillsComponent));
            const skillsComp: SkillsComponent = skillsElem.componentInstance;
            expect(skillsComp.skills).toEqual(skills);
        });
    });
});
