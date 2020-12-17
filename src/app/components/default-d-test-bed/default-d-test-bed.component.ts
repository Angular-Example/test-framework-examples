import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-d-test-bed',
  templateUrl: './default-d-test-bed.component.html',
  styleUrls: ['./default-d-test-bed.component.css']
})
export class DefaultDTestBedComponent implements OnInit {
  value: string;

  constructor() { }

  ngOnInit(): void {
    this.value = 'Hello, World!';
  }

}
