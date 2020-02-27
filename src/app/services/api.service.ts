import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class ApiService {

    constructor(private http: HttpClient) { }

    get<T>(endpoint: string, params?: any, headers?: any): Observable<T> {
        const url = this.makeUrl(endpoint, params);
        let x = this.http.get<T>(url, headers && { headers: new HttpHeaders(headers) })
            .pipe(
                catchError(this.handleError)
            );
        return x
    }
    post<T>(endpoint: string, data: any, headers?: any): Observable<T> {
        const url = this.makeUrl(endpoint);
        let x = this.http.post<T>(url, data, headers && { headers: new HttpHeaders(headers) })
            .pipe(
                catchError(this.handleError)
            );
        return x
    }
    update<T>(endpoint: string, data: any, headers?: any): Observable<T> {
        const url = this.makeUrl(endpoint);
        let x = this.http.put<T>(url, data, headers && { headers: new HttpHeaders(headers) })
            .pipe(
                catchError(this.handleError)
            );
        return x
    }
    delete<T>(endpoint: string, id: string, headers?: any): Observable<T> {
        const url = this.makeUrl(`${endpoint}/${id}`);
        let x = this.http.delete<T>(url, headers && { headers: new HttpHeaders(headers) })
            .pipe(
                catchError(this.handleError)
            );
        return x
    }


    private makeUrl(resource: string, params?: object): string {
        let url = `${environment.apiRoot}${resource}`;
        if (params) {
            url += '?';
            for (let [key, value] of Object.entries(params)) {
                url += `${key}=${value}&`;
            }
            url = url.slice(0, url.length - 1);
        }
        return url;
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
