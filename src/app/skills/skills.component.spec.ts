;import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkillsComponent } from './skills.component';
import { Skill } from '../models/skill';

describe('SkillsComponent', () => {
    let fixture: ComponentFixture<SkillsComponent>;
    let component: SkillsComponent;
    let skills: Skill[];
    let sortSkillsSpy: jasmine.Spy;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SkillsComponent]
        })
        .compileComponents();

        fixture = TestBed.createComponent(SkillsComponent);
        component = fixture.componentInstance;
        skills = [
            new Skill({name: 'C#', exp: 85}),
            new Skill({name: 'PHP', exp: 100}),
            new Skill({name: 'Angular', exp: 0}),
            new Skill({name: 'JavaScript', exp: 20}),
            new Skill({name: 'HTML5', exp: 20})
        ];
        component.skills = skills;
        sortSkillsSpy = spyOn(component, 'sortSkills').and.callThrough();
    });

    describe(`Component`, () => {
        it(`should create`, () => {
            expect(component).toBeTruthy();
        });
    });

    describe(`skills`, () => {
        it(`should be included as a property`, () => {
            expect(component.skills).toBeTruthy();
        });

        it(`should be of type Skill[]`, () => {
            expect(component.skills).toEqual(skills);
        });
    });

    describe(`ngOnInit`, () => {
        beforeEach(() => {
            fixture.detectChanges();
        });

        it(`should be included as a method`, () => {
            expect(component.ngOnInit).toBeTruthy();
        });

        it(`should call the 'sortSkills' method`, () => {
            expect(sortSkillsSpy).toHaveBeenCalledTimes(1);
        });
    });

    describe(`sortSkills`, () => {
        it(`should sort the 'skills' property by 'exp' primarily, and for any matches sort 'name' alphabetically`, () => {
            const sortedSkills = [
                new Skill({name: 'PHP', exp: 100}),
                new Skill({name: 'C#', exp: 85}),
                new Skill({name: 'HTML5', exp: 20}),
                new Skill({name: 'JavaScript', exp: 20}),
                new Skill({name: 'Angular', exp: 0})
            ];

            expect(component.skills).toEqual(skills);

            fixture.detectChanges();

            for (let i = 0; i < component.skills.length; i++) {
                expect(component.skills[i]).toEqual(sortedSkills[i]);
            };
        });
    });

    describe(`HTML`, () => {
        beforeEach(() => {
            fixture.detectChanges();
        });

        it(`should only display if the 'skills' property is set and longer than 0`, () => {
            const element: HTMLElement = fixture.nativeElement;
            const initSkillsElem: HTMLElement | null = element.querySelector('div');

            expect(initSkillsElem).toBeTruthy();

            //@ts-expect-error
            component.skills = undefined;
            fixture.detectChanges();

            const remSkillsElem: HTMLElement | null = element.querySelector('div');
            expect(remSkillsElem).toBeNull();
        });

        it(`should include a suitable title`, () => {
            const element: HTMLElement = fixture.nativeElement;
            const title: HTMLElement | null = element.querySelector('h3');

            expect(title).toBeTruthy();
            expect(title?.textContent).toEqual('Skills');
        });

        it(`should show each skill included in 'skills'`, () => {
            const element: HTMLElement = fixture.nativeElement;
            const skillDivs: NodeListOf<HTMLElement> = element.querySelectorAll('.col-12');

            expect(skillDivs.length).toEqual(component.skills.length);
        });

        it(`should show each skill name in the relevant 'skills'`, () => {
            const element: HTMLElement = fixture.nativeElement;
            const skillNames: NodeListOf<HTMLElement> = element.querySelectorAll('.col-12 > p');

            for (let i = 0; i < component.skills.length; i++) {
                expect(skillNames[i].textContent).toEqual(component.skills[i].name);
            };
        });

        it(`should include a progress bar for each skill`, () => {
            const element: HTMLElement = fixture.nativeElement;
            const skillProgresses: NodeListOf<HTMLElement> = element.querySelectorAll('.progress');
            expect(skillProgresses.length).toEqual(component.skills.length);
        });

        it(`should show the progress based on the 'exp' property of the skill (out of 100)`, () => {
            const element: HTMLElement = fixture.nativeElement;
            const skillProgressBars: NodeListOf<HTMLElement> = element.querySelectorAll('.progress-bar');

            for (let i = 0; i < component.skills.length; i++) {
                expect(skillProgressBars[i].getAttribute('aria-valuenow')).toEqual(component.skills[i].exp.toString());
                expect(skillProgressBars[i].style.width).toEqual(`${component.skills[i].exp.toString()}%`);
                expect(skillProgressBars[i].getAttribute('aria-valuemax')).toEqual('100');
            };
        });
    });
});
