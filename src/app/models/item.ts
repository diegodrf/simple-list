export class Item {
    public createdAt: Date;

    constructor(
        public name: string,
        public url: string,
    ) {
        this.createdAt = new Date();
    }
}
