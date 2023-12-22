import { Contacts } from "./contacts";

export class ContactDetails {
    text?: string;
    contacts: Contacts;

    constructor(contact: any) {
        if (contact.text) this.text = contact.text;
        this.contacts = new Contacts(contact.contacts ?? {});
    }
}
