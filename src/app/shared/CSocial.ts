export class Social {
    id: number;
    name: string;
    imgSrc: string;
    logInStatus: boolean;

    constructor (id: number, name: string, src: string, logInStatus = false) {
        this.id = id;
        this.name = name;
        this.imgSrc = src;
        this.logInStatus = logInStatus;
    }
}