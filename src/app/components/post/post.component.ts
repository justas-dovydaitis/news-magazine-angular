import { Component, Input } from '@angular/core';
import { IPost } from 'src/app/models/Post';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss']
})
export class PostComponent {
    @Input() post: IPost;

}
