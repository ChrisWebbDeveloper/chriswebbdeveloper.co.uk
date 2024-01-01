import { Cv } from './cv';

describe('Cv', () => {
    let cv: Cv;
    const pdf: string = 'pdf';
    const docx: string = 'docx';
    let cvObj: {
        pdf?: string | null,
        docx?: string | null
    };

    beforeEach(async () => {
        cvObj = {pdf, docx};
        cv = new Cv(cvObj);
    });

    describe(`Class`, () => {
        it(`should create an instance`, () => {
            expect(cv).toBeTruthy();
        });
    });

    describe(`pdf`, () => {
        it(`should be included as a property`, () => {
            expect(cv.pdf).toBeTruthy();
        });

        it(`should be undefined if not set in constructor`, () => {
            cvObj.pdf = undefined;
            cv = new Cv(cvObj);
            expect(cv.pdf).toBeUndefined();
        });

        it(`should be undefined if null in constructor`, () => {
            cvObj.pdf = null;
            cv = new Cv(cvObj);
            expect(cv.pdf).toBeUndefined();
        });

        it(`should be set to the value provided in the constructor`, () => {
            expect(cv.pdf).toEqual(pdf);
        });
    });

    describe(`docx`, () => {
        it(`should be included as a property`, () => {
            expect(cv.docx).toBeTruthy();
        });

        it(`should be undefined if not set in constructor`, () => {
            cvObj.docx = undefined;
            cv = new Cv(cvObj);
            expect(cv.docx).toBeUndefined();
        });

        it(`should be undefined if null in constructor`, () => {
            cvObj.docx = null;
            cv = new Cv(cvObj);
            expect(cv.docx).toBeUndefined();
        });

        it(`should be set to the value provided in the constructor`, () => {
            expect(cv.docx).toEqual(docx);
        });
    });
});
