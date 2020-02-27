import { Component, OnInit, Input } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Router } from '@angular/router';
import { IPost } from 'src/app/models/post';

@Component({
    selector: 'app-featured-post-container',
    templateUrl: './featured-post-container.component.html',
    styleUrls: ['./featured-post-container.component.scss']
})
export class FeaturedPostContainerComponent implements OnInit {
    private service: PostsService;
    private router: Router;
    public posts: IPost[];

    constructor(service: PostsService, router: Router) {
        this.service = service;
        this.router = router;
    }

    ngOnInit(): void {
        const params = {
            type: 'featured',
            limit: 4
        }
        this.service.getList(params).subscribe(
            response => {
                this.posts = response;
                console.log('Featured posts', this.posts)
            },
            err => {
                console.group('Featured posts init');
                console.warn(`Something went wrong, response status is: ${err.status}.`);
                console.groupEnd();
            }
        )

    }

}
