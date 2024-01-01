import { HomeDetails } from './home-details';

describe('HomeDetails', () => {
    let homeDetails: HomeDetails;
    const name: string = 'Name';
    const blurb: string = 'Blurb';

    beforeEach(async () => {
        homeDetails = new HomeDetails(name, blurb);
    });

    describe(`Class`, () => {
        it(`should create an instance`, () => {
            expect(homeDetails).toBeTruthy();
        });
    });

    describe(`name`, () => {
        it(`should be included as a property`, () => {
            expect(homeDetails.name).toBeTruthy();
        });

        it(`should be set to the value provided in the constructor`, () => {
            expect(homeDetails.name).toEqual(name);
        });
    });

    describe(`blurb`, () => {
        it(`should be included as a property`, () => {
            expect(homeDetails.blurb).toBeTruthy();
        });

        it(`should be undefined if not set in constructor`, () => {
            homeDetails = new HomeDetails(name);
            expect(homeDetails.blurb).toBeUndefined();
        });

        it(`should be undefined if null in constructor`, () => {
            homeDetails = new HomeDetails(name, null);
            expect(homeDetails.blurb).toBeUndefined();
        });

        it(`should be set to the value provided in the constructor`, () => {
            expect(homeDetails.blurb).toEqual(blurb);
        });
    });
});
