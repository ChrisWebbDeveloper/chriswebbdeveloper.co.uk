import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { HomeDetails } from '../models/home-details';
import { ContactDetails } from '../models/contact-details';

describe('HomeComponent', () => {
    let fixture: ComponentFixture<HomeComponent>;
    let component: HomeComponent;
    const details: HomeDetails = new HomeDetails('Name', 'Blurb');
    let contacts: ContactDetails;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HomeComponent]
        })
        .compileComponents();

        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        component.details = details;
        
        contacts = new ContactDetails({email: 'test_email', linkedin: 'test_linkedin', github: 'test_github'});
        component.contacts = contacts;
        fixture.detectChanges();
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

        it(`should be of type HomeDetails`, () => {
            expect(component.details).toEqual(details);
        });
    });

    describe(`contacts`, () => {
        it(`should be included as a property`, () => {
            expect(component.contacts).toBeTruthy();
        });

        it(`should be of type ContactDetails`, () => {
            expect(component.contacts).toEqual(contacts);
        });
    });

    describe(`HTML`, () => {
        it(`should only be populated if the 'details' is available`, () => {
            const element: HTMLElement = fixture.nativeElement;
            const initDivs: NodeListOf<HTMLElement> = element.querySelectorAll(':scope > div');
            expect(initDivs.length).toEqual(2);

            //@ts-expect-error
            component.details = undefined;
            fixture.detectChanges();
            const removedDivs: NodeListOf<HTMLElement> = element.querySelectorAll(':scope > div');
            expect(removedDivs.length).toEqual(1);
        });

        it(`should include a display title`, () => {
            const element: HTMLElement = fixture.nativeElement;
            const title: HTMLElement | null = element.querySelector('.display-1');
            expect(title).toBeTruthy();
        });

        it(`should have a title including the name from the details`, () => {
            const element: HTMLElement = fixture.nativeElement;
            const title: HTMLElement | null = element.querySelector('.display-1');
            expect(title?.textContent?.trim()).toEqual(`Hi, I'm ${details.name}`);
        });

        it(`should include a subtitle`, () => {
            const element: HTMLElement = fixture.nativeElement;
            const subtitle: HTMLElement | null = element.querySelector('.display-5');
            expect(subtitle).toBeTruthy();
        });

        it(`should display the blurb from the 'details as the subtitle`, () => {
            const element: HTMLElement = fixture.nativeElement;
            const subtitle: HTMLElement | null = element.querySelector('.display-5');
            expect(subtitle?.textContent?.trim()).toEqual(details.blurb);
        });

        it(`should include a button to move onto the 'About Me' section`, () => {
            const element: HTMLElement = fixture.nativeElement;
            const button: HTMLElement | null = element.querySelector('.btn');
            expect(button).toBeTruthy();
        });

        it(`should move onto the #about-me button when the 'About Me' button is clicked`, () => {
            const element: HTMLElement = fixture.nativeElement;
            const button: HTMLAnchorElement | null = element.querySelector('.btn');
            expect(button?.href.includes('#about-me')).toBeTrue();
        });

        it(`should have a suitable label on the button to move onto the 'About Me' section`, () => {
            const element: HTMLElement = fixture.nativeElement;
            const button: Element | null = element.querySelector('.btn');
            expect(button?.textContent).toEqual('More About Me');
        });

        it(`should only display the contacts if they are available`, () => {
            const element: HTMLElement = fixture.nativeElement;
            const initDivs: NodeListOf<HTMLElement> = element.querySelectorAll(':scope > div');
            expect(initDivs.length).toEqual(2);

            //@ts-expect-error
            component.contacts = undefined;
            fixture.detectChanges();
            const detailssRmvDivs: NodeListOf<HTMLElement> = element.querySelectorAll(':scope > div');
            expect(detailssRmvDivs.length).toEqual(1);
        });

        it(`should only display the 'email' link if set in the contacts`, () => {
            function getLinks(): NodeListOf<HTMLElement> {
                const element: HTMLElement = fixture.nativeElement;
                const contactsElem: HTMLElement = element.querySelectorAll(':scope > div')[1] as HTMLElement;
                return contactsElem.querySelectorAll('a');
            };

            expect(getLinks().length).toEqual(3);

            component.contacts.email = undefined;
            fixture.detectChanges();
            expect(getLinks().length).toEqual(2);
        });

        it(`should open an email to the provided 'email' when clicked`, () => {
            const element: HTMLElement = fixture.nativeElement;
            const contactsElem: HTMLElement = element.querySelectorAll(':scope > div')[1] as HTMLElement;
            const email: HTMLAnchorElement = contactsElem.querySelectorAll('a')[0];
            expect(email.href).toEqual(`mailto:${contacts.email}`);
        });

        it(`should only display the 'linkedin' link if set in the contacts`, () => {
            function getLinks(): NodeListOf<HTMLElement> {
                const element: HTMLElement = fixture.nativeElement;
                const contactsElem: HTMLElement = element.querySelectorAll(':scope > div')[1] as HTMLElement;
                return contactsElem.querySelectorAll('a');
            };

            expect(getLinks().length).toEqual(3);

            component.contacts.linkedin = undefined;
            fixture.detectChanges();
            expect(getLinks().length).toEqual(2);
        });

        it(`should open the 'linkedin' link in a new tab when clicked`, () => {
            const element: HTMLElement = fixture.nativeElement;
            const contactsElem: HTMLElement = element.querySelectorAll(':scope > div')[1] as HTMLElement;
            const linkedin: HTMLAnchorElement = contactsElem.querySelectorAll('a')[1];
            expect(linkedin.href).toEqual(`https://linkedin.com/in/${contacts.linkedin}`);
        });

        it(`should only display the 'github' link if set in the contacts`, () => {
            function getLinks(): NodeListOf<HTMLElement> {
                const element: HTMLElement = fixture.nativeElement;
                const contacts: HTMLElement = element.querySelectorAll(':scope > div')[1] as HTMLElement;
                return contacts.querySelectorAll('a');
            };

            expect(getLinks().length).toEqual(3);

            component.contacts.github = undefined;
            fixture.detectChanges();
            expect(getLinks().length).toEqual(2);
        });

        it(`should open the 'linkedin' link in a new tab when clicked`, () => {
            const element: HTMLElement = fixture.nativeElement;
            const contactsElem: HTMLElement = element.querySelectorAll(':scope > div')[1] as HTMLElement;
            const github: HTMLAnchorElement = contactsElem.querySelectorAll('a')[2];
            expect(github.href).toEqual(`https://github.com/${contacts.github}`);
        });

        it(`should include an image to be used as the background`, () => {
            const element: HTMLElement = fixture.nativeElement;
            const img: HTMLImageElement | null = element.querySelector('img');
            expect(img).toBeTruthy();
        });


        it(`should set the image's 'src' attribute to a suitable image link`, () => {
            const element: HTMLElement = fixture.nativeElement;
            const img: HTMLImageElement | null = element.querySelector('img');
            expect(img?.src.includes('/assets/images/home-background.webp')).toBeTrue();
        });

        it(`should give the image a suitable 'alt' attribute based on the project's title`, () => {
            const element: HTMLElement = fixture.nativeElement;
            const img: HTMLImageElement | null = element.querySelector('img');
            expect(img?.alt).toEqual('Background');
        });
    });
});
