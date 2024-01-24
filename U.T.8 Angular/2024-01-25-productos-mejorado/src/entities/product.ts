export class Product {
    constructor(private _uuid: string, private _nombre: string, private _price: number) {}

    public get uuid(): string {
        return this._uuid;
    }

    public get nombre(): string {
        return this._nombre;
    }

    public get price(): number {
        return this._price; 
    }
}
