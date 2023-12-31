import { AboutDetails } from './about-details';

describe(`AboutDetails`, () => {
    let aboutDetails: AboutDetails;
    const title: string = 'Test Title';
    const aboutMe: string = 'This\n is \n a \n test\n string';

    beforeEach(async () => {
        aboutDetails = new AboutDetails(aboutMe, title);
    });

    describe(`Component`, () => {
        it(`should create an instance`, () => {
            expect(aboutDetails).toBeTruthy();
        });
    });

    describe(`title`, () => {
        it(`should be included as a property`, () => {
            expect(aboutDetails.title).toBeTruthy();
        });

        it(`should be undefined if not set`, () => {
            aboutDetails = new AboutDetails('');
            expect(aboutDetails.title).toBeUndefined();
        });

        it(`should match the given value passed into the constructor if provided`, () => {
            expect(aboutDetails.title).toEqual(title);
        });
    });

    describe(`aboutMe`, () => {
        it (`should be included as a property`, () => {
            expect(aboutDetails.aboutMe).toBeTruthy();
        });

        it(`should be an array, with each item set to the string value split along line breaks (\\n)`, () => {
            const textAsArray = aboutMe.split('\n');

            for (let i = 0; i < aboutDetails.aboutMe.length; i++) {
                expect(aboutDetails.aboutMe[i]).toEqual(textAsArray[i]);
            };
        });
    });
});
