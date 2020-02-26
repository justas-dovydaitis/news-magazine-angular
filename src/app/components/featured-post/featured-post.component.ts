import { Component, Input } from '@angular/core';
import { IPost } from 'src/app/models/Post';

@Component({
    selector: 'app-featured-post',
    templateUrl: './featured-post.component.html',
    styleUrls: ['./featured-post.component.scss']
})
export class FeaturedPostComponent {
    @Input() post: IPost;
}

