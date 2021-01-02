import { Component, OnInit } from '@angular/core';
import { EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit {

  @Input() guestValue: string;
  @Output() selected = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  click() { this.selected.emit(this.guestValue); }
}
