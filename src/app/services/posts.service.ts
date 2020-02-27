import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { IPost } from '../models/post';
import { ApiService } from './api.service';

@Injectable({
    providedIn: 'root'
})
export class PostsService {
    private resourceUrl = '';
    constructor(private http: ApiService, ) { }

    create(data: IPost, image: File): Observable<IPost> {
        const reqBody = this.createRequestBody(data, image);
        //`posts`, reqBody, { 'Content-Type': 'application/json' }
        console.log(reqBody);
        return this.http.post<IPost>('', '');
    }
    getOne(id: string): Observable<any> {
        return this.http.get<IPost[]>(`posts/${id}`, { 'Content-Type': 'application/json' });
    }
    update(id: string, data: any): Observable<any> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Observable<any> {
        throw new Error("Method not implemented.");
    }
    getList(params: object): Observable<IPost[]> {
        return this.http.get<IPost[]>('posts/', params, { 'Content-Type': 'application/json' });

    }
    createRequestBody(post: IPost, image?: File): FormData | string {
        if (image) {
            const body = new FormData();
            console.group('creating formData');
            for (let [key, value] of Object.entries(post)) {
                body.append(key, value);
                console.log(key, value);
            }

            body.set('imageUrl', image);
            console.log('imageUrl', image);
            console.groupEnd();
            return body;
        }
        return JSON.stringify(post);
    }
}
