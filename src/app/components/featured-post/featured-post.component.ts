import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { Category } from 'src/app/models/Category';

@Component({
    selector: 'app-featured-post',
    templateUrl: './featured-post.component.html',
    styleUrls: ['./featured-post.component.scss']
})
export class FeaturedPostComponent extends Post implements OnInit {

    constructor() { super(); }

    ngOnInit(): void { }

}

