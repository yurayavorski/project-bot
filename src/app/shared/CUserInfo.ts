export class UserInfo {
    imgSource: string;
    name: string;
    constructor (name: string, src: string) {
        this.name = name;
        this.imgSource = src;
    }
}