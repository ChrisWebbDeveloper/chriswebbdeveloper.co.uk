export class HomeDetails {
    name!: string;
    blurb?: string;

    constructor(name: string, blurb?: string | null) {
        this.name = name;
        if (blurb) this.blurb = blurb;
    }
}
