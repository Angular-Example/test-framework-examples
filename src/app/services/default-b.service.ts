import { Injectable } from '@angular/core';
import { DefaultAService } from './default-a.service';

@Injectable({
  providedIn: 'root'
})
export class DefaultBService {

  constructor(private defaultAService: DefaultAService) { }

  getValue(): string {
    return this.defaultAService.getValue();
  }
}
