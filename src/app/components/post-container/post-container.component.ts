import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { Category } from 'src/app/models/Category';
import { PostsService } from 'src/app/services/posts.service';

@Component({
    selector: 'app-post-container',
    templateUrl: './post-container.component.html',
    styleUrls: ['./post-container.component.scss']
})
export class PostContainerComponent implements OnInit {

    private service: PostsService;
    public posts: Post[];

    constructor(service: PostsService) {
        this.service = service;
    }
    ngOnInit(): void {

        this.service.getList('limit=10').subscribe(
            response => {
                this.posts = response;
                console.log('Basic posts', this.posts)
            },
            err => {
                console.group('Basic posts init');
                console.warn(`Something went wrong, response status is: ${err.status}.`);
                console.groupEnd();
            }
        )

    }
}
