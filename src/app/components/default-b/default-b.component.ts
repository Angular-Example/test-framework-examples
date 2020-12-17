import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-b',
  templateUrl: './default-b.component.html',
  styleUrls: ['./default-b.component.css']
})
export class DefaultBComponent {
  isOn = false;
  clicked() { this.isOn = !this.isOn; }
  get message() { return `The light is ${this.isOn ? 'On' : 'Off'}`; }
}
