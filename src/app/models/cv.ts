export class Cv {
    pdf?: string;
    docx?: string;

    constructor(cv: {pdf?: string | null, docx?: string | null}) {
        if (cv.pdf) this.pdf = cv.pdf;
        if (cv.docx) this.docx = cv.docx;
    }
}
