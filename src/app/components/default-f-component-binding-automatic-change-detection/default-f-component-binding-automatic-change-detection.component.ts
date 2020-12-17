import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-f-component-binding-automatic-change-detection',
  templateUrl: './default-f-component-binding-automatic-change-detection.component.html',
  styleUrls: ['./default-f-component-binding-automatic-change-detection.component.css']
})
export class DefaultFComponentBindingAutomaticChangeDetectionComponent implements OnInit {

  title = 'Hello, World';

  constructor() { }

  ngOnInit(): void {
  }

}
