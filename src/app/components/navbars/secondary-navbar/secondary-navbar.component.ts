import { Component, OnInit } from '@angular/core';
import { NavLink } from '../../../models/NavLink';

@Component({
    selector: 'app-secondary-navbar',
    templateUrl: './secondary-navbar.component.html',
    styleUrls: ['./secondary-navbar.component.scss']
})
export class SecondaryNavbarComponent implements OnInit {

    navItems: NavLink[] = [
        new NavLink('Home', '/'),
        new NavLink('Life', '/life'),
        new NavLink('Vintage', '/vintage'),
        new NavLink('Latest', '/latest'),
        new NavLink('Travel', '/travel'),
        new NavLink('Design', '/design')
    ];
    constructor() { }

    ngOnInit(): void {
    }

}
