export class UserInfo {
    imgSource: string;
    name: string;
    token: string;
    constructor (name: string, src: string, token: string = "") {
        this.name = name;
        this.imgSource = src;
        this.token = token;
    }
}