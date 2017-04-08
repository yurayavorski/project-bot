export class Social {
    id: number;
    name: string;
    imgSrc: string;

    constructor (id: number, name: string, src: string) {
        this.id = id;
        this.name = name;
        this.imgSrc = src;
    }
}