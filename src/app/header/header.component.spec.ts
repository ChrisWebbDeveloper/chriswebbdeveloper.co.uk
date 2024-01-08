import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
    let fixture: ComponentFixture<HeaderComponent>;
    let component: HeaderComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HeaderComponent]
        })
        .compileComponents();

        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe(`Component`, () => {
        it(`should create`, () => {
            expect(component).toBeTruthy();
        });
    });

    describe(`HTML`, () => {
        it(`should be a nav element`, () => {
            const element: HTMLElement = fixture.nativeElement;
            const nav: HTMLElement | null = element.querySelector('nav')
            expect(nav).toBeTruthy();
        });

        it(`should include a navbar brand`, () => {
            const element: HTMLElement = fixture.nativeElement;
            const navbarBrand: HTMLElement | null = element.querySelector('.navbar-brand')
            expect(navbarBrand).toBeTruthy();
        });

        it(`should navigate to home ('#') when the navbar brand is clicked`, () => {
            const element: HTMLElement = fixture.nativeElement;
            const navbarBrand: HTMLAnchorElement | null = element.querySelector('.navbar-brand')
            expect(navbarBrand?.href.substring(navbarBrand?.href.length - 1)).toEqual('#');
        });

        it(`should include the logo in the navbar brand`, () => {
            const element: HTMLElement = fixture.nativeElement;
            const navbarBrand: HTMLElement | null = element.querySelector('.navbar-brand');
            const img: HTMLImageElement | null = navbarBrand ? navbarBrand.querySelector('img') : null;
            expect(img?.src.includes('/assets/images/logo.png')).toBeTrue();
        });

        it(`should have 'Chris Webb Developer' as the logo alt text`, () => {
            const element: HTMLElement = fixture.nativeElement;
            const navbarBrand: HTMLElement | null = element.querySelector('.navbar-brand')
            const img: HTMLImageElement | null = navbarBrand ? navbarBrand.querySelector('img') : null;
            expect(img?.alt).toEqual('Logo');
        });

        it(`should include 'Chris Webb Developer' text in the navbar brand`, () => {
            const element: HTMLElement = fixture.nativeElement;
            const navbarBrand: HTMLElement | null = element.querySelector('.navbar-brand')
            expect(navbarBrand?.textContent?.trim()).toEqual('Chris Webb Developer');
        });

        it(`should include a toggle button for smaller windows`, () => {
            const element: HTMLElement = fixture.nativeElement;
            const navbarToggler: HTMLElement | null = element.querySelector('.navbar-toggler')
            expect(navbarToggler).toBeTruthy();
        });

        it(`should include a 'Home' link`, () => {
            const element: HTMLElement = fixture.nativeElement;
            const navLinks: NodeListOf<HTMLAnchorElement> = element.querySelectorAll('.nav-link');
            expect(navLinks[0].textContent).toEqual('Home');
        });

        it(`should move to the #home section via the Home link`, () => {
            const element: HTMLElement = fixture.nativeElement;
            const navLinks: NodeListOf<HTMLAnchorElement> = element.querySelectorAll('.nav-link');
            expect(navLinks[0].href.includes('#home')).toBeTrue();
        });

        it(`should include a 'About Me' link`, () => {
            const element: HTMLElement = fixture.nativeElement;
            const navLinks: NodeListOf<HTMLAnchorElement> = element.querySelectorAll('.nav-link');
            expect(navLinks[1].textContent).toEqual('About Me');
        });

        it(`should move to the #about-me section via the 'About Me' link`, () => {
            const element: HTMLElement = fixture.nativeElement;
            const navLinks: NodeListOf<HTMLAnchorElement> = element.querySelectorAll('.nav-link');
            expect(navLinks[1].href.includes('#about-me')).toBeTrue();
        });

        it(`should include a 'Projects' link`, () => {
            const element: HTMLElement = fixture.nativeElement;
            const navLinks: NodeListOf<HTMLAnchorElement> = element.querySelectorAll('.nav-link');
            expect(navLinks[2].textContent).toEqual('Projects');
        });

        it(`should move to the #projects section via the 'Projects' link`, () => {
            const element: HTMLElement = fixture.nativeElement;
            const navLinks: NodeListOf<HTMLAnchorElement> = element.querySelectorAll('.nav-link');
            expect(navLinks[2].href.includes('#projects')).toBeTrue();
        });

        it(`should include a 'Contact' link`, () => {
            const element: HTMLElement = fixture.nativeElement;
            const navLinks: NodeListOf<HTMLAnchorElement> = element.querySelectorAll('.nav-link');
            expect(navLinks[3].textContent).toEqual('Contact');
        });

        it(`should move to the #contact section via the 'Contact' link`, () => {
            const element: HTMLElement = fixture.nativeElement;
            const navLinks: NodeListOf<HTMLAnchorElement> = element.querySelectorAll('.nav-link');
            expect(navLinks[3].href.includes('#contact')).toBeTrue();
        });
    });
});
