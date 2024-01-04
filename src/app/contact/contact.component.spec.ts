;import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactComponent } from './contact.component';
import { ContactDetails } from '../models/contact-details';
import { Cv } from '../models/cv';
import { environment } from '../../environments/environment.development';

describe('ContactComponent', () => {
    let fixture: ComponentFixture<ContactComponent>;
    let component: ContactComponent;
    let details: ContactDetails;
    let cv: Cv;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ContactComponent]
        })
        .compileComponents();

        fixture = TestBed.createComponent(ContactComponent);
        component = fixture.componentInstance;
        details = new ContactDetails({email: 'test_email', linkedin: 'test_linkedin', github: 'test_github'});
        component.details = details;
        cv = new Cv(environment.cv);
        component.cv = cv;
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

        it(`should be of type ContactDetails`, () => {
            expect(component.details).toEqual(details);
        });
    });

    describe(`cv`, () => {
        it(`should be included as a property`, () => {
            expect(component.cv).toBeTruthy();
        });

        it(`should be of type Cv`, () => {
            expect(component.cv).toEqual(cv);
        });

        it(`should be set to the cv in the environment if available`, () => {
            expect(component.cv).toEqual(cv);
        });

        it(`should be undefined if there is no cv in the environment`, () => {
            component.cv = undefined;
            expect(component.cv).toBeUndefined();
        });
    });

    describe(`HTML`, () => {
        it(`should only be populated if the 'details' or 'cv' properties are available`, () => {
            const element: HTMLElement = fixture.nativeElement;
            const initDivs: NodeListOf<HTMLElement> = element.querySelectorAll(':scope > div');
            expect(initDivs.length).toEqual(1);

            //@ts-expect-error
            component.details = undefined;
            component.cv = undefined;
            fixture.detectChanges();
            const removedDivs: NodeListOf<HTMLElement> = element.querySelectorAll(':scope > div');
            expect(removedDivs.length).toEqual(0);
        });

        it(`should include a title with suitable content`, () => {
            const element: HTMLElement = fixture.nativeElement;
            const h2: HTMLElement | null = element.querySelector('h2');
            expect(h2).toBeTruthy();
            expect(h2?.textContent).toEqual('Contact');
        });

        it(`should only display the contact details if the 'details' property is set, along with any of its properties ('email', 'linkedin' or 'github')`, () => {
            const element: HTMLElement = fixture.nativeElement;
            const initDivs: NodeListOf<HTMLElement> = element.querySelectorAll(':scope > div > div');
            expect(initDivs.length).toEqual(2);

            //@ts-expect-error
            component.details = undefined;
            fixture.detectChanges();
            const removedDivs: NodeListOf<HTMLElement> = element.querySelectorAll(':scope > div > div');
            expect(removedDivs.length).toEqual(1);
        });

        it(`should include a suitable message for the Contacts section`, () => {
            const element: HTMLElement = fixture.nativeElement;
            const contactsElem: HTMLElement = element.querySelectorAll(':scope > div > div')[0] as HTMLElement;
            const p: HTMLElement | null = contactsElem!.querySelector('p');
            expect(p).toBeTruthy();
            expect(p?.textContent).toEqual('Want to get in touch? I am available at the links below:');
        });

        it(`should only include the email link if the 'details' has its 'email' property set`, () => {
            const element: HTMLElement = fixture.nativeElement;
            const contactsElem: HTMLElement = element.querySelectorAll(':scope > div > div')[0] as HTMLElement;
            const initContacts: NodeListOf<HTMLAnchorElement> = contactsElem!.querySelectorAll('a');
            expect(initContacts.length).toEqual(3);

            component.details.email = undefined;
            fixture.detectChanges();
            const remEmailContacts: NodeListOf<HTMLAnchorElement> = contactsElem!.querySelectorAll('a');
            expect(remEmailContacts.length).toEqual(2);
        });

        it(`should open an email to contact the specified 'email' property`, () => {
            const element: HTMLElement = fixture.nativeElement;
            const contactsElem: HTMLElement = element.querySelectorAll(':scope > div > div')[0] as HTMLElement;
            const contacts: NodeListOf<HTMLAnchorElement> = contactsElem!.querySelectorAll('a');
            const email: HTMLAnchorElement = contacts[0];
            expect(email.href).toEqual(`mailto:${details.email}`);
        });

        it(`should display the 'email' property in text as part of the related link`, () => {
            const element: HTMLElement = fixture.nativeElement;
            const contactsElem: HTMLElement = element.querySelectorAll(':scope > div > div')[0] as HTMLElement;
            const contacts: NodeListOf<HTMLAnchorElement> = contactsElem!.querySelectorAll('a');
            const email: HTMLAnchorElement = contacts[0];
            expect(email.textContent?.trim()).toEqual(details.email!);
        });

        it(`should only include the LinkedIn link if the 'details' has its 'linkedin' property set`, () => {
            const element: HTMLElement = fixture.nativeElement;
            const contactsElem: HTMLElement = element.querySelectorAll(':scope > div > div')[0] as HTMLElement;
            const initContacts: NodeListOf<HTMLElement> = contactsElem!.querySelectorAll('a');
            expect(initContacts.length).toEqual(3);

            component.details.linkedin = undefined;
            fixture.detectChanges();

            const remLIContacts: NodeListOf<HTMLElement> = contactsElem!.querySelectorAll('a');
            expect(remLIContacts.length).toEqual(2);
        });

        it(`should open LinkedIn to the specified 'linkedin' property in a new tab`, () => {
            const element: HTMLElement = fixture.nativeElement;
            const contactsElem: HTMLElement = element.querySelectorAll(':scope > div > div')[0] as HTMLElement;
            const contacts: NodeListOf<HTMLAnchorElement> = contactsElem!.querySelectorAll('a');
            const linkedIn: HTMLAnchorElement = contacts[1];

            expect(linkedIn.href).toEqual(details.getLinkedinLink()!);
            expect(linkedIn.target).toEqual('_blank');
        });

        it(`should display the 'linkedin' property in text as part of the related link`, () => {
            const element: HTMLElement = fixture.nativeElement;
            const contactsElem: HTMLElement = element.querySelectorAll(':scope > div > div')[0] as HTMLElement;
            const contacts: NodeListOf<HTMLAnchorElement> = contactsElem!.querySelectorAll('a');
            const linkedIn: HTMLAnchorElement = contacts[1];
            expect(linkedIn.textContent?.trim()).toEqual(details.linkedin);
        });

        it(`should only include the Github link if the 'details' has its 'github' property set`, () => {
            const element: HTMLElement = fixture.nativeElement;
            const contactsElem: HTMLElement = element.querySelectorAll(':scope > div > div')[0] as HTMLElement;
            const initContacts: NodeListOf<HTMLElement> = contactsElem!.querySelectorAll('a');
            expect(initContacts.length).toEqual(3);

            component.details.github = undefined;
            fixture.detectChanges();
            const remGHContacts: NodeListOf<HTMLElement> = contactsElem!.querySelectorAll('a');
            expect(remGHContacts.length).toEqual(2);
        });

        it(`should open Github to the specified 'github' property in a new tab`, () => {
            const element: HTMLElement = fixture.nativeElement;
            const contactsElem: HTMLElement = element.querySelectorAll(':scope > div > div')[0] as HTMLElement;
            const contacts: NodeListOf<HTMLAnchorElement> = contactsElem!.querySelectorAll('a');
            const gitHub: HTMLAnchorElement = contacts[2];

            expect(gitHub.href).toEqual(details.getGithubLink()!);
            expect(gitHub.target).toEqual('_blank');
        });

        it(`should display the 'github' property in text as part of the related link`, () => {
            const element: HTMLElement = fixture.nativeElement;
            const contactsElem: HTMLElement = element.querySelectorAll(':scope > div > div')[0] as HTMLElement;
            const contacts: NodeListOf<HTMLAnchorElement> = contactsElem!.querySelectorAll('a');
            const gitHub: HTMLAnchorElement = contacts[2];
            expect(gitHub.textContent?.trim()).toEqual(details.github);
        });

        it(`should only display the cv details if the 'cv' property is set, along with any of its properties ('pdf' or 'docx')`, () => {
            const element: HTMLElement = fixture.nativeElement;
            const initDivs: NodeListOf<HTMLElement> = element.querySelectorAll(':scope > div > div');
            expect(initDivs.length).toEqual(2);

            component.cv = undefined;
            fixture.detectChanges();
            const removedDivs: NodeListOf<HTMLElement> = element.querySelectorAll(':scope > div > div');
            expect(removedDivs.length).toEqual(1);
        });

        it(`should include a suitable message for the CVs section`, () => {
            const element: HTMLElement = fixture.nativeElement;
            const cvDiv: HTMLElement = element.querySelectorAll(':scope > div > div')[1] as HTMLElement;
            const cvMsg: HTMLElement | null = cvDiv.querySelector('p');
            expect(cvMsg?.textContent).toEqual('You can find my CV below:');
        });

        it(`should only display the pdf link if it is included`, () => {
            const element: HTMLElement = fixture.nativeElement;
            const cvDivs: HTMLElement = element.querySelectorAll(':scope > div > div')[1] as HTMLElement;
            const initCvLinks: NodeListOf<HTMLAnchorElement> = cvDivs.querySelectorAll('a');
            expect(initCvLinks.length).toEqual(2);

            //@ts-expect-error
            component.cv.pdf = undefined;
            fixture.detectChanges();

            const remPdfLinks: NodeListOf<HTMLAnchorElement> = cvDivs.querySelectorAll('a');
            expect(remPdfLinks.length).toEqual(1);
        });

        it(`should download the pdf link if it is clicked`, () => {
            const element: HTMLElement = fixture.nativeElement;
            const cvDivs: HTMLElement = element.querySelectorAll(':scope > div > div')[1] as HTMLElement;
            const cvLinks: NodeListOf<HTMLAnchorElement> = cvDivs.querySelectorAll('a');
            const pdf: HTMLAnchorElement = cvLinks[0];

            expect(pdf.href).toEqual(cv.pdf!);
            expect(pdf.target).toEqual('_blank');
            expect(pdf.attributes.getNamedItem('download')).toBeTruthy();
        });

        it(`should have suitable text for the pdf link`, () => {
            const element: HTMLElement = fixture.nativeElement;
            const cvDivs: HTMLElement = element.querySelectorAll(':scope > div > div')[1] as HTMLElement;
            const cvLinks: NodeListOf<HTMLAnchorElement> = cvDivs.querySelectorAll('a');
            const pdf: HTMLAnchorElement = cvLinks[0];
            expect(pdf.textContent?.trim()).toEqual('Download PDF');
        });

        it(`should only display the docx link if it is included`, () => {
            const element: HTMLElement = fixture.nativeElement;
            const cvDivs: HTMLElement = element.querySelectorAll(':scope > div > div')[1] as HTMLElement;
            const initCvLinks: NodeListOf<HTMLAnchorElement> = cvDivs.querySelectorAll('a');
            expect(initCvLinks.length).toEqual(2);

            //@ts-expect-error
            component.cv.docx = undefined;
            fixture.detectChanges();

            const remDocxLinks: NodeListOf<HTMLAnchorElement> = cvDivs.querySelectorAll('a');
            expect(remDocxLinks.length).toEqual(1);
        });

        it(`should download the docx link if it is clicked`, () => {
            const element: HTMLElement = fixture.nativeElement;
            const cvDivs: HTMLElement = element.querySelectorAll(':scope > div > div')[1] as HTMLElement;
            const cvLinks: NodeListOf<HTMLAnchorElement> = cvDivs.querySelectorAll('a');
            const docx: HTMLAnchorElement = cvLinks[1];

            expect(docx.href).toEqual(cv.docx!);
            expect(docx.target).toEqual('_blank');
            expect(docx.attributes.getNamedItem('download')).toBeTruthy();
        });

        it(`should have suitable text for the docx link`, () => {
            const element: HTMLElement = fixture.nativeElement;
            const cvDivs: HTMLElement = element.querySelectorAll(':scope > div > div')[1] as HTMLElement;
            const cvLinks: NodeListOf<HTMLAnchorElement> = cvDivs.querySelectorAll('a');
            const docx: HTMLAnchorElement = cvLinks[1];
            expect(docx.textContent?.trim()).toEqual('Download DOCX');
        });
    });
});
