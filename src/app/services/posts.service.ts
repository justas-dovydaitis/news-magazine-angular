import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Post, IPost } from '../models/post';
import { ApiService, IApiService } from './api.service';

@Injectable({
    providedIn: 'root'
})
export class PostsService extends ApiService<Post> implements IApiService {
    constructor(http: HttpClient) {
        super(http);
        this.resource = 'posts/';
    }
}
