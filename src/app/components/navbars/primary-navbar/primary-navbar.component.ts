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
        new NavLink('Blog', '/'),
        new NavLink('Latest', '/latest'),
        new NavLink('Life', '/life'),
        new NavLink('Travel', '/travel'),
        new NavLink('Fashion', '/fashion')
    ];
    navLinksExternal: SocialLink[] = [
        new SocialLink('Facebook', 'fb.com', 'facebook'),
        new SocialLink('Pinterest', 'pinterest.com', 'pinterest'),
        new SocialLink('Twitter', 'twitter.com', 'twitter'),
        new SocialLink('Youtube', 'youtube.com', 'youtube')
    ];
    constructor() { }

    ngOnInit(): void {
    }

}
