import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-default-c-input-output',
  templateUrl: './default-c-input-output.component.html',
  styleUrls: ['./default-c-input-output.component.css']
})
export class DefaultCInputOutputComponent {
  @Input() value: string;
  @Output() selected = new EventEmitter<string>();
  click() { this.selected.emit(this.value); }
}
