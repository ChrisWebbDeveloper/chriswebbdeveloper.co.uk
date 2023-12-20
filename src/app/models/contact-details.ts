import { Contacts } from "./contacts";

export class ContactDetails {
    contacts: Contacts;

    constructor(contact: any) {
        this.contacts = new Contacts(contact.contacts ?? {});
    }
}
