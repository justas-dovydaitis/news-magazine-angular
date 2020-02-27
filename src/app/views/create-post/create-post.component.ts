import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PostsService } from 'src/app/services/posts.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { ActivatedRoute } from '@angular/router';
import { IPost } from 'src/app/models/post';
import { ICategory } from 'src/app/models/Category';
import { Option } from 'src/app/models/Option';

@Component({
    selector: 'app-create-post',
    templateUrl: './create-post.component.html',
    styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {
    private postsService: PostsService;
    private categoriesService: CategoriesService;
    private activatedRoute: ActivatedRoute;


    protected postId: string;
    protected post: IPost;
    protected categories: ICategory[];
    protected edit = false;

    protected title = new FormControl('');
    protected content = new FormControl('');
    protected image = new FormControl('');
    protected imageTitle = new FormControl('');
    protected imageAlt = new FormControl('');
    protected selectedCategories = new FormControl([]);
    protected featured = new FormControl(false);
    options: Option[];

    postForm = new FormGroup({
        title: this.title,
        content: this.content,
        image: this.image,
        imageTitle: this.imageTitle,
        imageAlt: this.imageAlt,
        categories: this.selectedCategories,
        featured: this.featured
    });


    constructor(postsService: PostsService, categoryService: CategoriesService, activatedRoute: ActivatedRoute) {
        this.postsService = postsService;
        this.categoriesService = categoryService;
        this.activatedRoute = activatedRoute;
        this.postId = this.activatedRoute.snapshot.params.id;
    }

    ngOnInit(): void {
        this.loadCategories();
        this.selectedCategories.setValue(new Array<Option>({
            name: "Travel",
            value: "5e43d86a6622ef16309cf017",
            selected: false
        }))
    }
    loadCategories(): void {
        this.categoriesService.getList().subscribe(
            response => {
                this.categories = response;
                this.options = response.map(item => {
                    let opt: Option = { name: item.name, value: item._id, selected: false }
                    return opt;
                })
                console.log('Loaded categories', this.categories)
            },
            err => {
                console.group('Post edit form: loading categories');
                console.warn(`Something went wrong, response status is: ${err.status}.`);
                console.groupEnd();
            }
        )
    }
    loadPost(): void {
        this.postsService.getOne(this.postId).subscribe(
            response => {
                this.post = response;
                console.log('Loaded post', this.post)
            },
            err => {
                console.group('Post edit form: loading post');
                console.warn(`Something went wrong, response status is: ${err.status}.`);
                console.groupEnd();
            }
        );
    }
    savePost() {
        console.warn(this.postForm.value);
    }

}
