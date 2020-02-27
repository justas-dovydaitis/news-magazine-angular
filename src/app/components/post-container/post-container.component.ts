import { Component, OnInit, Input } from '@angular/core';
import { IPost } from 'src/app/models/Post';
import { PostsService } from 'src/app/services/posts.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-post-container',
    templateUrl: './post-container.component.html',
    styleUrls: ['./post-container.component.scss']
})
export class PostContainerComponent implements OnInit {

    public posts: IPost[] = [];

    constructor(
        private service: PostsService,
        private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(routeParams => {
            const category = this.activatedRoute.snapshot.params.category;
            console.log(category)
            this.loadPosts(category);
        });

    }
    loadPosts(category?: string): void {
        this.service.getList({ limit: '10' }).subscribe(
            response => {
                //reik normaliai padaryt is backo gaut
                if (!category) {
                    this.posts = response
                }
                else {
                    this.posts = response.filter(post => {

                        for (let cat of post.categories) {
                            if (cat.name.toUpperCase() === category.toUpperCase()) return true;
                        }
                        return false

                    });
                }
                console.log('Basic posts', this.posts)
            },
            err => {
                console.group('Basic posts init');
                console.warn(`Something went wrong, response status is: ${err.status}.`);
                console.groupEnd();
            },
            // complete => {

            // }
        )
    }
}
