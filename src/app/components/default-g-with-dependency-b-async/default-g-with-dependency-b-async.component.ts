import { Component, OnInit } from '@angular/core';
import { DefaultDAsyncService } from '../../services/default-d-async.service'

@Component({
  selector: 'app-default-g-with-dependency-b-async',
  templateUrl: './default-g-with-dependency-b-async.component.html',
  styleUrls: ['./default-g-with-dependency-b-async.component.css']
})
export class DefaultGWithDependencyBAsyncComponent implements OnInit {

  value: string;
  error: Error;

  constructor(private defaultDAsyncService: DefaultDAsyncService) { }

  ngOnInit(): void {
    this.getValue();
  }

  getValue(): void {
    this.defaultDAsyncService.getValueAsync().subscribe(value => {
      this.value = value;
    }, error => {
      this.error = error;
    });
  }
}
