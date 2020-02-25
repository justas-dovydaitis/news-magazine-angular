import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PostsService } from 'src/app/services/posts.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post';

@Component({
    selector: 'app-create-post',
    templateUrl: './create-post.component.html',
    styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {
    postForm = new FormGroup({
        title: new FormControl(''),
        content: new FormControl(''),
        image: new FormControl(''),
        imageTitle: new FormControl(''),
        imageAlt: new FormControl(''),
        categories: new FormControl([]),
        featured: new FormControl(false)
    });


    private postsService: PostsService;
    private activatedRoute: ActivatedRoute;
    protected postId: string;
    protected post: Post;
    protected edit = false;

    constructor(postsService: PostsService, activatedRoute: ActivatedRoute) {
        this.postsService = postsService;
        this.activatedRoute = activatedRoute;
        this.postId = this.activatedRoute.snapshot.params.id;
    }

    ngOnInit(): void {
        this.postsService.getOne(this.postId).subscribe(
            response => {
                this.post = response;
                console.log('Featured posts', this.post)
            },
            err => {
                console.group('Featured posts init');
                console.warn(`Something went wrong, response status is: ${err.status}.`);
                console.groupEnd();
            }
        );
    }
    savePost() {
        console.warn(this.postForm.value);
    }

}
