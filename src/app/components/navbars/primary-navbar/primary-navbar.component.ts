import { Component, OnInit } from '@angular/core';
import { SocialLink } from '../../../models/SocialLink';
import { NavLink } from '../../../models/NavLink';

@Component({
    selector: 'app-primary-navbar',
    templateUrl: './primary-navbar.component.html',
    styleUrls: [
        '../navbar.scss',
        './primary-navbar.component.scss',
    ]
})
export class PrimaryNavbarComponent implements OnInit {
    currentDate: Date = new Date();
    navLinksInternal: NavLink[] = [
        new NavLink('Blog', 'categories/'),
        new NavLink('Latest', 'categories/latest'),
        new NavLink('Life', 'categories/life'),
        new NavLink('Travel', 'categories/travel'),
        new NavLink('Fashion', 'categories/fashion')
    ];
    navLinksExternal: SocialLink[] = [
        new SocialLink('Facebook', 'https://fb.com', 'facebook'),
        new SocialLink('Pinterest', 'https://pinterest.com', 'pinterest'),
        new SocialLink('Twitter', 'https://twitter.com', 'twitter'),
        new SocialLink('Youtube', 'https://youtube.com', 'youtube')
    ];
    constructor() { }

    ngOnInit(): void {
    }

}
