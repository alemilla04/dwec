export class Product {
    // private _uuid: string;

    // constructor(uuid: string) {
    //     this._uuid = uuid;
    // }

    constructor(private _uuid: string, private _name: string, private _price: number) {
    }

    public get uuid(): string {
        return this._uuid;
    }

    public get name(): string {
        return this._name;
    }

    public get price(): number {
        return this._price;
    }

    // public get price(): number {
    //     return this._name;
    // }
}
