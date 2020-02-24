export class NavLink {
    name: string;
    url: string;

    constructor(name, url) {
        this.name = name;
        this.url = url;
    }
    getName = (): string => {
        return this.name;
    }
    getUrl = (): string => {
        return this.name;
    }
}
