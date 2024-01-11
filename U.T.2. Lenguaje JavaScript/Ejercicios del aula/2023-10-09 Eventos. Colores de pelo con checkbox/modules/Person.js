class Person {
    constructor(firstname, lastname) {
        this._firstname = firstname;
        this._lastname = lastname;
    }

    get firstname() {
        return this._firstname;
    }

    set firstname(value) {
        this._firstname = value;
    }

    get lastname() {
        return this._lastname;
    }

    get hairColor() {
        return this._hairColor;
    }

    set hairColor(value) {
        this._hairColor = value;
    }

    fullname() {
        return `${this._firstname} ${this._lastname}`;
    }
}