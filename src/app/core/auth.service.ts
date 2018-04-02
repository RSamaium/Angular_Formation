import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) { }

    login(email: string, password: string) {
        return this.http.post<any>('https://reqres.in/api/login', { email, password })
            .map(user => {
                if (user && user.token) {
                    localStorage.setItem('angular-token', user.token);
                }
                return user;
            });
    }

    logout() {
        localStorage.removeItem('angular-token');
    }
}