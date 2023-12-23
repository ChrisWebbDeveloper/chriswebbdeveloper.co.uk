import { AboutDetails } from './about-details';
import { Skill } from './skill';

describe(`AboutDetails`, () => {
    let aboutDetails: AboutDetails;

    beforeEach(async () => {
        aboutDetails = new AboutDetails({});
    });

    describe(`Component`, () => {
        it(`should create an instance`, () => {
            expect(aboutDetails).toBeTruthy();
        });
    });

    describe(`title`, () => {
        const title: string = 'Test Title';

        it(`should be included as a property`, () => {
            expect(aboutDetails.title).toBeTruthy();
        });

        it(`should default to 'About Me'`, () => {
            expect(aboutDetails.title).toEqual('About Me');
        });

        it(`should match the given value passed into the constructor`, () => {
            aboutDetails = new AboutDetails({title: title});
            expect(aboutDetails.title).toEqual(title);
        });
    });

    describe(`text`, () => {
        const text: string = `This\n is \n a \n test\n string`;

        it (`should be included as a property`, () => {
            expect(aboutDetails.text).toBeTruthy();
        });

        it(`should default to an empty array`, () => {
            expect(aboutDetails.text).toEqual([]);
        });

        it(`should be an array, with each item set to the string value split along line breaks (\\n)`, () => {
            aboutDetails = new AboutDetails({text: text});
            const textAsArray = text.split('\n');

            for (let i = 0; i < aboutDetails.text.length; i++) {
                expect(aboutDetails.text[i]).toEqual(textAsArray[i]);
            };
        });
    });

    describe(`skills`, () => {
        const skills: Skill[] = [
            { name:'Test 1', exp:100 },
            { name:'Test 2', exp:100 },
            { name:'Test 3', exp:100 },
        ];

        it(`should be included as a property`, () => {
            expect(aboutDetails.skills).toBeTruthy();
        });

        it(`should default to an empty array`, () => {
            expect(aboutDetails.text).toEqual([]);
        });

        it(`should be an array matching the data passed in`, () => {
            aboutDetails = new AboutDetails({skills: skills});
            expect(aboutDetails.skills).toEqual(skills);
        });
    });
});
