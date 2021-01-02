import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-c-input-output-larger',
  templateUrl: './default-c-input-output-larger.component.html',
  styleUrls: ['./default-c-input-output-larger.component.css']
})
export class DefaultCInputOutputLargerComponent implements OnInit {

  values: string[] = [
    "Click Me for console.log! 1",
    "Click Me for console.log! 2",
    "Click Me for console.log! 3",
    "Click Me for console.log! 4"
  ];
  constructor() { }

  ngOnInit(): void {
  }

  consoleLog(childValue: string): void {
    console.log(childValue);
  }
}
