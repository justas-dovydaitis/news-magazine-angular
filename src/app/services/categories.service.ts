import { Injectable } from '@angular/core';
import { ICategory } from '../models/Category';
import { ApiService, IApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})

export class CategoriesService extends ApiService<ICategory> implements IApiService {

    constructor(http: HttpClient) {
        super(http);
        this.resource = 'categories/';
    }
}
