import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpProvider {
  constructor(private http: HttpClient) { }

  post(endpoint: string, body: any) {
    return this.http.post(endpoint, body);
  }
}