import { HomeDetails } from './home-details';

describe('HomeDetails', () => {
    let homeDetails: HomeDetails;
    const name = 'Name';
    const blurb = 'Blurb';

    beforeEach(async () => {
        homeDetails = new HomeDetails(name, blurb);
    });

    describe(`Component`, () => {
        it(`should create an instance`, () => {
            expect(homeDetails).toBeTruthy();
        });
    });

    describe(`name`, () => {
        it('should be included as a property', () => {
            expect(homeDetails.name).toBeTruthy();
        });

        it('should be set to the value provided in the constructor', () => {
            expect(homeDetails.name).toEqual(name);
        });
    });

    describe(`blurb`, () => {
        it('should be included as a property', () => {
            expect(homeDetails.blurb).toBeTruthy();
        });

        it('should be undefined if not set', () => {
            homeDetails = new HomeDetails(name);
            expect(homeDetails.blurb).toBeUndefined();
        });

        it('should be set to the value provided in the constructor', () => {
            expect(homeDetails.blurb).toEqual(blurb);
        });
    });
});
