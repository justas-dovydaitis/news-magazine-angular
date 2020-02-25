import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Post';

@Component({
    selector: 'app-latest-post',
    templateUrl: './latest-post.component.html',
    styleUrls: ['./latest-post.component.scss']
})
export class LatestPostComponent extends Post implements OnInit {

    constructor() { super() }

    ngOnInit(): void {
    }

}
