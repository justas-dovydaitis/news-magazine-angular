import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PostsService } from 'src/app/services/posts.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { ActivatedRoute } from '@angular/router';
import { IPost } from 'src/app/models/post';
import { ICategory } from 'src/app/models/Category';
// import { Option } from 'src/app/models/Option';

@Component({
    selector: 'app-create-post',
    templateUrl: './create-post.component.html',
    styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {
    protected postId: string;
    protected post: IPost;
    protected categories: ICategory[];
    protected edit = false;

    protected title = new FormControl('');
    content = new FormControl('');
    protected image = new FormControl('');
    imageTitle = new FormControl('');
    protected imageAlt = new FormControl('');
    protected selectedCategories = new FormControl([]);
    protected featured = new FormControl(false);
    options: HTMLOptionElement[];

    postForm = new FormGroup({
        title: this.title,
        content: this.content,
        image: this.image,
        imageTitle: this.imageTitle,
        imageAlt: this.imageAlt,
        categories: this.selectedCategories,
        featured: this.featured
    });


    constructor(private postsService: PostsService,
        private categoryService: CategoriesService,
        private activatedRoute: ActivatedRoute) {
        this.postId = this.activatedRoute.snapshot.params.id;
    }

    ngOnInit(): void {
        this.loadCategories();
        if (this.postId) {
            this.loadPost();
        }

    }
    loadCategories(): void {
        this.categoryService.getList().subscribe(
            response => {
                this.categories = response;
                this.options = response.map(item => {
                    let opt: HTMLOptionElement = new Option(item.name, item._id, false, false);
                    return opt;
                })
                console.log('Loaded categories', this.categories)
            },
            err => {
                console.group('Post edit form: loading categories');
                console.warn(`Something went wrong, response status is: ${err.status}.`);
                console.groupEnd();
            },
            () => {

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
            },
            () => {
                this.prefillForm();
            }
        );
    }
    prefillForm(): void {
        this.title.setValue(this.post.title);
        this.content.setValue(this.post.content);
        this.imageAlt.setValue(this.post.imageAlt);
        this.imageTitle.setValue(this.post.imageTitle);
        this.featured.setValue(this.post.featured);
        this.selectedCategories.setValue(this.post.categories.map(cat => {
            let option: HTMLOptionElement = new Option(cat.name, cat._id, false, true);
            return option;
        }));

    }
    savePost(): void {
        let data: IPost = {
            ...this.postForm.value,
            content: this.content.value

        }
        this.postsService.create(data, this.image.value)
    }

}
