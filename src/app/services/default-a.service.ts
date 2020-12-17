import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DefaultAService {

  constructor() { }

  getValue(): string {
    return 'Hello, World!';
  }

  getObservableValue(): Observable<string> {
    return of('Hello, World!');
  }

  getPromiseValue(): Promise<string> {
    return of('Hello, World!').toPromise();
  }
}
