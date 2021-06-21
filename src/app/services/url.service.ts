import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Url } from '../models/url'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class urlService {

  private getCode = 'http://localhost:4000/url';
  private shorentUrl = 'http://localhost:4000/generate_url';
  private longUrlObject!: Object;

  constructor(private http: HttpClient) { }

  getUrlCode(code: string) {
    const url = `${this.getCode + '/:'}${code}`;
    return this.http.get<Url>(url);
  }

  createShortUrl(longUrl: string): Observable<Url> {
    this.longUrlObject =  {
      "longUrl": longUrl
    }

    return this.http.post<Url>(this.shorentUrl, this.longUrlObject, httpOptions);
  }
}
