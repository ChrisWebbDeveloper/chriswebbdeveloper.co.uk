import { HomeTitle } from "./home-title";

export class HomeDetails {
    title: HomeTitle[];
    subtitle: string;

    constructor(home: any) {
        this.title = home.title ?? [];
        this.subtitle = home.subtitle ?? "";
    }
}
