import { Contacts } from "./contacts";
import { Cv } from "./cv";

export class ContactDetails {
    text?: string;
    contacts: Contacts;
    cv?: Cv;

    constructor(contact: any) {
        if (contact.text) this.text = contact.text;
        this.contacts = new Contacts(contact.contacts ?? {});
        if (contact.cv) this.cv = contact.cv;
    }
}
