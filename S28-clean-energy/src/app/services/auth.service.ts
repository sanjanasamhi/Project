import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly API_URL = environment.apiUrl || 'http://localhost:3000/api';
  
  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  login(credentials: {email: string, password: string}): Observable<any> {
    return this.http.post(`${this.API_URL}/login`, credentials)
      .pipe(tap((response: any) => {
        localStorage.setItem('token', response.token);
      }));
  }

  signup(user: {name: string, email: string, password: string}): Observable<any> {
    return this.http.post(`${this.API_URL}/signup`, user);
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}