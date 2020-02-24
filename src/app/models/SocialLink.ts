import { NavLink } from './NavLink';

export class SocialLink extends NavLink {
    iconClass: string;

    constructor(name, url, icon) {
        super(name, url);
        this.iconClass = icon;
    }
}
