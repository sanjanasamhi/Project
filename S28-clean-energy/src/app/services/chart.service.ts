import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ChartService {
  private readonly API_URL = environment.dataApiUrl || 'http://localhost:3000/api';
  private token = localStorage.getItem('token');
  private headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);

  constructor(private http: HttpClient) {
  }

  getSummaryData(): Observable<any> {
    return this.http.get(`${this.API_URL}/summary`, {headers:this.headers});
  }

  getReportsData(): Observable<any> {
    return this.http.get(`${this.API_URL}/reports`, {headers:this.headers});
  }
}