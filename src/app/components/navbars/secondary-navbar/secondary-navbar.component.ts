import { Component, OnInit } from '@angular/core';
import { NavLink } from '../../../models/NavLink';

@Component({
    selector: 'app-secondary-navbar',
    templateUrl: './secondary-navbar.component.html',
    styleUrls: ['./secondary-navbar.component.scss']
})
export class SecondaryNavbarComponent implements OnInit {
    navExpanded = false;
    navItems: NavLink[] = [
        new NavLink('Home', '/'),
        new NavLink('Life', 'categories/life'),
        new NavLink('Vintage', 'categories/vintage'),
        new NavLink('Latest', 'categories/latest'),
        new NavLink('Travel', 'categories/travel'),
        new NavLink('Design', 'categories/design')
    ];
    constructor() { }

    ngOnInit(): void {
    }
    toggleMenu(value: boolean): void {
        this.navExpanded = value;
    }

}
