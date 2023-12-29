export class Cv {
    pdf?: string;
    docx?: string;

    constructor(cv: {pdf?: string, docx?: string}) {
        if (cv.pdf) this.pdf = cv.pdf;
        if (cv.docx) this.docx = cv.docx;
    }
}
