import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Post';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss']
})
export class PostComponent extends Post implements OnInit {

    constructor() { super() }

    ngOnInit(): void {
    }

}
