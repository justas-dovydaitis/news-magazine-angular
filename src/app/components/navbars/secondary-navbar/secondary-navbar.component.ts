import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-secondary-navbar',
    templateUrl: './secondary-navbar.component.html',
    styleUrls: ['./secondary-navbar.component.scss']
})
export class SecondaryNavbarComponent implements OnInit {

    navItems: Array<{ name: string, to: string }> = [{
        name: 'Home',
        to: '/'
    }, {
        name: 'Life',
        to: '/life',
    }, {
        name: 'Vintage',
        to: '/vintage'
    }, {
        name: 'Latest',
        to: '/latest',
    }, {
        name: 'Travel',
        to: '/travel',
    }, {
        name: 'Design',
        to: '/design',
    }]
    constructor() { }

    ngOnInit(): void {
    }

}
