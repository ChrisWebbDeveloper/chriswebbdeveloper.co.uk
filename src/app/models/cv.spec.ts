import { Cv } from './cv';

describe('Cv', () => {
    let cv: Cv;
    const pdf: string = 'pdf';
    const docx: string = 'docx';

    beforeEach(async () => {
        cv = new Cv({pdf, docx});
    });

    describe(`Component`, () => {
        it(`should create an instance`, () => {
            expect(cv).toBeTruthy();
        });
    });

    describe(`pdf`, () => {
        it('should be included as a property', () => {
            expect(cv.pdf).toBeTruthy();
        });

        it('should be undefined if not set', () => {
            cv = new Cv({});
            expect(cv.pdf).toBeUndefined();
        });

        it('should be set to the value provided in the constructor', () => {
            expect(cv.pdf).toEqual(pdf);
        });
    });

    describe(`docx`, () => {
        it('should be included as a property', () => {
            expect(cv.docx).toBeTruthy();
        });

        it('should be undefined if not set', () => {
            cv = new Cv({});
            expect(cv.docx).toBeUndefined();
        });

        it('should be set to the value provided in the constructor', () => {
            expect(cv.docx).toEqual(docx);
        });
    });
});
