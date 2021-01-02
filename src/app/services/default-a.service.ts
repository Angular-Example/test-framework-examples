import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DefaultAService {
  value: string;

  constructor() {
    this.value = 'Hello, World!';
  }

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
