import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { IPost } from 'src/app/models/Post';

@Component({
    selector: 'app-latest-post-container',
    templateUrl: './latest-post-container.component.html',
    styleUrls: ['./latest-post-container.component.scss']
})
export class LatestPostContainerComponent implements OnInit {
    private service: PostsService;
    public posts: IPost[];

    constructor(service: PostsService) {
        this.service = service;
    }
    ngOnInit(): void {
        const params = {
            type: 'latest',
            limit: 10
        }
        this.service.getList(params).subscribe(
            response => {
                this.posts = response;
                console.log('Latest posts', this.posts)
            },
            err => {
                console.group('Basic posts init');
                console.warn(`Something went wrong, response status is: ${err.status}.`);
                console.groupEnd();
            }
        )

    }
}
