import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';
import packageJson from '../../../package.json';

describe('FooterComponent', () => {
    let fixture: ComponentFixture<FooterComponent>;
    let component: FooterComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FooterComponent]
        })
        .compileComponents();

        fixture = TestBed.createComponent(FooterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe(`Component`, () => {
        it(`should create`, () => {
            expect(component).toBeTruthy();
        });
    });

    describe(`version`, () => {
        it(`should be included as a property`, () => {
            expect(component.version).toBeTruthy();
        });

        it(`should be set to the 'version' in the package.json`, () => {
            expect(component.version).toEqual(packageJson.version);
        });
    });

    describe(`buildYear`, () => {
        it(`should be included as a property`, () => {
            expect(component.buildYear).toBeTruthy();
        });

        it(`should be set to the 'buildYear' in the package.json`, () => {
            expect(component.buildYear).toEqual(packageJson.buildYear);
        });
    });

    describe(`currentYear`, () => {
        it(`should be included as a property`, () => {
            expect(component.currentYear).toBeTruthy();
        });

        it(`should be set current year`, () => {
            const current = new Date().getFullYear();
            expect(component.currentYear).toEqual(current);
        });
    });

    describe(`HTML`, () => {
        it(`should be a footer element`, () => {
            const element: HTMLElement = fixture.nativeElement;
            const footer: HTMLElement | null = element.querySelector('footer')
            expect(footer).toBeTruthy();
        });

        it(`should include the copyright symbol (©)`, () => {
            const element: HTMLElement = fixture.nativeElement;
            const span: HTMLElement = element.querySelectorAll('span')[0];
            expect(span.textContent?.includes('©')).toBeTrue();
        });

        it(`should include only the buildYear if the buildYear matches the currentYear`, () => {
            const year: number = 2000;
            const yearStr: string = year.toString();
            component.buildYear = year;
            component.currentYear = year;
            fixture.detectChanges();

            const element: HTMLElement = fixture.nativeElement;
            const span: HTMLElement = element.querySelectorAll('span')[0];
            expect(span.textContent?.includes(yearStr)).toBeTrue();
            expect(span.textContent?.includes(`${yearStr}-${yearStr}`)).toBeFalse();
        });

        it(`should include both the buildYear and currentYear separated by a hyphen if they are different`, () => {
            component.buildYear = 2000;
            component.currentYear = 2028;
            const buildYrStr: string = component.buildYear.toString();
            const currentYrStr: string = component.currentYear.toString();
            fixture.detectChanges();

            const element: HTMLElement = fixture.nativeElement;
            const span: HTMLElement = element.querySelectorAll('span')[0];
            expect(span.textContent?.includes(`${buildYrStr}-${currentYrStr}`)).toBeTrue();
        });

        it(`should include 'Chris Webb Developer'`, () => {
            const element: HTMLElement = fixture.nativeElement;
            const span: HTMLElement = element.querySelectorAll('span')[0];
            expect(span.textContent?.includes('Chris Webb Developer')).toBeTrue();
        });

        it(`should include the version prepended with 'v'`, () => {
            const version: string = '1.2.3';
            component.version = version;
            fixture.detectChanges();

            const element: HTMLElement = fixture.nativeElement;
            const span: HTMLElement = element.querySelectorAll('span')[1];
            expect(span.textContent).toEqual(`v${version}`);
        });
    });
});
