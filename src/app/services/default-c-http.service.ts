import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DefaultCHttpService {

  constructor(private http: HttpClient) { }

  getValue(): Observable<string> {
    return this.http.get<string>('assets/file/default', { responseType: 'text' as 'json'});
  }
}
