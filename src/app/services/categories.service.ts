import { Injectable } from '@angular/core';
import { ICategory } from '../models/Category';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})

export class CategoriesService {
    constructor(private http: ApiService) { };
    create(data: ICategory, image: File): Observable<ICategory> {
        throw new Error("Method not implemented.");
    }
    getOne(id: string): Observable<any> {
        throw new Error("Method not implemented.");
    }
    update(id: string, data: any): Observable<any> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Observable<any> {
        throw new Error("Method not implemented.");
    }
    getList(params?: object): Observable<any> {
        return this.http.get('/categories', params && params, { 'Content-Type': 'application/json' });
    }

}
