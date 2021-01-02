import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DefaultAFakeService {

  value: string = 'Hello, World! FAKE';

  constructor() { }

  getValue(): string {
    return 'Hello, World! FAKE';
  }

  getObservableValue(): Observable<string> {
    return of('Hello, World! FAKE');
  }

  getPromiseValue(): Promise<string> {
    return of('Hello, World! FAKE').toPromise();
  }
}
