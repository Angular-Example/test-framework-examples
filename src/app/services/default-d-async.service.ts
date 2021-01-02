import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DefaultDAsyncService {

  constructor() { }

  getValueAsync(): Observable<string> {
    return of('Hello, World! ASYNC');
  }
}
