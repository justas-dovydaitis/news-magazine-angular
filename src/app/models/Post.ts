import { Category } from './Category';
import { Input } from '@angular/core';


export interface IPost {
    _id: string;
    title: string;
    content: string;
    imageUrl: string;
    imageAlt: string;
    imageTitle: string;
    created: string;
    lastUpdated: string;
    featured: boolean;
    categories: Category[];
}

export class Post implements IPost {
    @Input() _id: string;
    @Input() title: string;
    @Input() content: string;
    @Input() imageUrl: string;
    @Input() imageAlt: string;
    @Input() imageTitle: string;
    @Input() created: string;
    @Input() lastUpdated: string;
    @Input() featured: boolean;
    @Input() categories: Category[];

    // constructor(_id: string, title: string, content: string, imageUrl: string,
    //     imageAlt: string, imageTitle: string, created: Date, lastUpdated: Date,
    //     featured: boolean, categories: Category[]) {

    //     this._id = _id;
    //     this.title = title;
    //     this.content = content;
    //     this.imageUrl = imageUrl;
    //     this.imageAlt = imageAlt;
    //     this.imageTitle = imageTitle;
    //     this.created = created;
    //     this.lastUpdated = lastUpdated;
    //     this.featured = featured;
    //     this.categories = categories;
    // }

    public isNew(): boolean {

        return true;
    }
}
