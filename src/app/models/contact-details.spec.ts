import { ContactDetails } from './contact-details';

describe('ContactDetails', () => {
    let contactDetails: ContactDetails;
    const email: string = 'test@email.com';
    const linkedin: string = 'LinkedIn';
    const github: string = 'Github';
    let contactDetailsObj: {
        email?: string | null,
        linkedin?: string | null,
        github?: string | null
    };
    let getLinkSpy: jasmine.Spy;

    beforeEach(async () => {
        contactDetailsObj = {email, linkedin, github};
        contactDetails = new ContactDetails(contactDetailsObj);
        //@ts-expect-error
        getLinkSpy = spyOn(contactDetails, 'getLink').and.callThrough();
    });

    describe(`Class`, () => {
        it(`should create an instance`, () => {
            expect(contactDetails).toBeTruthy();
        });
    });

    describe(`email`, () => {
        it(`should be included as a property`, () => {
            expect(contactDetails.email).toBeTruthy();
        });

        it(`should be undefined if not set in constructor`, () => {
            contactDetailsObj.email = undefined;
            contactDetails = new ContactDetails(contactDetailsObj);
            expect(contactDetails.email).toBeUndefined();
        });

        it(`should be undefined if null in constructor`, () => {
            contactDetailsObj.email = null;
            contactDetails = new ContactDetails(contactDetailsObj);
            expect(contactDetails.email).toBeUndefined();
        });

        it(`should be set to the value provided in the constructor`, () => {
            expect(contactDetails.email).toEqual(email);
        });
    });

    describe(`linkedin`, () => {
        it(`should be included as a property`, () => {
            expect(contactDetails.linkedin).toBeTruthy();
        });

        it(`should be undefined if not set in constructor`, () => {
            contactDetailsObj.linkedin = undefined;
            contactDetails = new ContactDetails(contactDetailsObj);
            expect(contactDetails.linkedin).toBeUndefined();
        });

        it(`should be undefined if null in constructor`, () => {
            contactDetailsObj.linkedin = null;
            contactDetails = new ContactDetails(contactDetailsObj);
            expect(contactDetails.linkedin).toBeUndefined();
        });

        it(`should be set to the value provided in the constructor`, () => {
            expect(contactDetails.linkedin).toEqual(linkedin);
        });
    });

    describe(`github`, () => {
        it(`should be included as a property`, () => {
            expect(contactDetails.github).toBeTruthy();
        });

        it(`should be undefined if not set in constructor`, () => {
            contactDetailsObj.github = undefined;
            contactDetails = new ContactDetails(contactDetailsObj);
            expect(contactDetails.github).toBeUndefined();
        });

        it(`should be undefined if null in constructor`, () => {
            contactDetailsObj.github = null;
            contactDetails = new ContactDetails(contactDetailsObj);
            expect(contactDetails.github).toBeUndefined();
        });

        it(`should be set to the value provided in the constructor`, () => {
            expect(contactDetails.github).toEqual(github);
        });
    });

    describe(`getLink()`, () => {
        it(`should be included as a method`, () => {
            //@ts-expect-error
            expect(contactDetails.getLink).toBeTruthy();
        });

        it(`should return the link concatenated with the base if the link is a valid string`, () => {
            const link = 'link';
            const base = 'base';
            //@ts-expect-error
            expect(contactDetails.getLink(link, base)).toEqual(base + link);
        });

        it(`should return null if the link is undefined or empty`, () => {
            let link = undefined;
            const base = 'base';
            //@ts-expect-error
            expect(contactDetails.getLink(link, base)).toBeNull();

            link = null;
            //@ts-expect-error
            expect(contactDetails.getLink(link, base)).toBeNull();

            link = '';
            //@ts-expect-error
            expect(contactDetails.getLink(link, base)).toBeNull();
        });
    });

    describe(`getLinkedinLink()`, () => {
        it(`should be included as a method`, () => {
            expect(contactDetails.getLinkedinLink).toBeTruthy();
        });

        it(`should call the getLink method`, () => {
            contactDetails.getLinkedinLink();
            expect(getLinkSpy).toHaveBeenCalledTimes(1);
        });

        it(`should pass in the linkedin property and 'https://linkedin.com/in/' as parameters to the getLink method`, () => {
            contactDetails.getLinkedinLink();
            expect(getLinkSpy).toHaveBeenCalledOnceWith(linkedin, 'https://linkedin.com/in/');
        });
    });

    describe(`getGithubLink()`, () => {
        it(`should be included as a method`, () => {
            expect(contactDetails.getGithubLink).toBeTruthy();
        });

        it(`should call the getLink method`, () => {
            contactDetails.getLinkedinLink();
            expect(getLinkSpy).toHaveBeenCalledTimes(1);
        });

        it(`should pass in the github property and 'https://github.com/' as parameters to the getLink method`, () => {
            contactDetails.getGithubLink();
            expect(getLinkSpy).toHaveBeenCalledOnceWith(github, 'https://github.com/');
        });
    });
});
