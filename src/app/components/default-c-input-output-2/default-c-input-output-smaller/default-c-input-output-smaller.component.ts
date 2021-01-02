import { Component, OnInit } from '@angular/core';
import { EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-default-c-input-output-smaller',
  templateUrl: './default-c-input-output-smaller.component.html',
  styleUrls: ['./default-c-input-output-smaller.component.css']
})
export class DefaultCInputOutputSmallerComponent implements OnInit {

  @Input() value: string;
  @Output() selected = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  click() { this.selected.emit(this.value); }
}
