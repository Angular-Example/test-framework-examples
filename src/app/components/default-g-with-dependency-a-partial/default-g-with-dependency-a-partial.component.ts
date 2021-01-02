import { Component, OnInit } from '@angular/core';
import { DefaultAService } from '../../services/default-a.service'

@Component({
  selector: 'app-default-g-with-dependency-a-partial',
  templateUrl: './default-g-with-dependency-a-partial.component.html',
  styleUrls: ['./default-g-with-dependency-a-partial.component.css']
})
export class DefaultGWithDependencyAPartialComponent implements OnInit {

  value: string;

  constructor(private defaultAService: DefaultAService) { }

  ngOnInit(): void {
    this.value = this.defaultAService.value;
  }

  getValue(): void {
    this.value = this.defaultAService.getValue();
  }
}
