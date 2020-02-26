import { Component, Input } from '@angular/core';
import { IPost } from 'src/app/models/Post';

@Component({
    selector: 'app-latest-post',
    templateUrl: './latest-post.component.html',
    styleUrls: ['./latest-post.component.scss']
})
export class LatestPostComponent {
    @Input() post: IPost;
}
