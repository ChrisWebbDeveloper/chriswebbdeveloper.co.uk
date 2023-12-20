import { Contacts } from "./contacts";

export class ContactDetails {
    title: string;
    text?: string;
    contacts: Contacts;

    constructor(contact: any) {
        this.title = contact.title ?? "Contact";
        this.text = contact.text;
        this.contacts = new Contacts(contact.contacts ?? {});
    }
}
