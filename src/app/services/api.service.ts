import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const { apiRoot } = environment;


export interface IApiService {
    create(data: any): Observable<any>;
    getOne(id: string): Observable<any>;
    update(id: string, data: any): Observable<any>;
    delete(id: string): Observable<any>;
    getList(searchQuery: string): Observable<any>;
}
@Injectable({
    providedIn: 'root'
})

export class ApiService<T> implements IApiService {
    protected baseUrl = apiRoot;
    protected resource = '';
    protected http: HttpClient;
    protected httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
        })
    };

    constructor(http: HttpClient) {
        this.http = http;
    }

    public create(data: T): Observable<T> {
        let url = `${this.baseUrl}${this.resource}`;
        return this.http.post<T>(url, data, this.httpOptions)
            .pipe(
                retry(1),
                catchError(this.handleError)
            );
    }
    public getOne(id: string): Observable<T> {
        let url = `${this.baseUrl}${this.resource}${id}`;
        return this.http.get<T>(url, this.httpOptions)
            .pipe(
                retry(1),
                catchError(this.handleError)
            );
    }
    public update(id: string, data: T): Observable<T> {
        let url = `${this.baseUrl}${this.resource}${id}`;
        return this.http.put<T>(url, data, this.httpOptions)
            .pipe(
                retry(1),
                catchError(this.handleError)
            );
    }
    public delete(id: string): Observable<T> {
        let url = `${this.baseUrl}${this.resource}${id}`;
        return this.http.delete<T>(url, this.httpOptions)
            .pipe(
                retry(1),
                catchError(this.handleError)
            );
    }
    public getList(searchQuery: string): Observable<T[]> {
        let url = `${this.baseUrl}${this.resource}?${searchQuery}`;
        return this.http.get<T[]>(url, this.httpOptions)
            .pipe(
                retry(1),
                catchError(this.handleError)
            );
    }
    protected handleError(error: HttpErrorResponse): Observable<never> {
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
        } else {
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        return throwError(
            'Something bad happened; please try again later.');
    };
}
