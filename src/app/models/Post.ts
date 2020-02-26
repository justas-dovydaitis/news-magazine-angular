import { ICategory } from './Category';
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
    categories: ICategory[];
}
