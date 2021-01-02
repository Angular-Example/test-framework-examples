import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.css']
})
export class HostComponent implements OnInit {

  hostValue: string;

  constructor() { }

  ngOnInit(): void {
    this.hostValue = 'Hello, World!';
  }

  consoleLog(guestValue: string): void {
    console.log(guestValue);
  }
}
