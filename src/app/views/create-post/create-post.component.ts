import { Component, OnInit, Input, OnDestroy } from '@angular/core';
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
    private postsService: PostsService;
    private activatedRoute: ActivatedRoute;

    protected postId: string;
    protected post: Post;
    protected edit = false;

    protected title = new FormControl('');
    protected content = new FormControl('');
    protected image = new FormControl('');
    protected imageTitle = new FormControl('');
    protected imageAlt = new FormControl('');
    protected categories = new FormControl([]);
    protected featured = new FormControl(false);
    postForm = new FormGroup({
        title: this.title,
        content: this.content,
        image: this.image,
        imageTitle: this.imageTitle,
        imageAlt: this.imageAlt,
        categories: this.categories,
        featured: this.featured
    });


    constructor(postsService: PostsService, activatedRoute: ActivatedRoute) {
        this.postsService = postsService;
        this.activatedRoute = activatedRoute;
        this.postId = this.activatedRoute.snapshot.params.id;
    }

    ngOnInit(): void {

    }
    loadPost(): void {
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
