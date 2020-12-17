import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-f-component-binding',
  templateUrl: './default-f-component-binding.component.html',
  styleUrls: ['./default-f-component-binding.component.css']
})
export class DefaultFComponentBindingComponent implements OnInit {

  title = 'Hello, World!';

  constructor() { }

  ngOnInit(): void {
  }

}
