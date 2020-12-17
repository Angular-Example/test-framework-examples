import { Component, OnInit } from '@angular/core';
import { DefaultAService } from '../../services/default-a.service'
import { DefaultBService } from '../../services/default-b.service'
import { DefaultCHttpService } from '../../services/default-c-http.service'

@Component({
  selector: 'app-default-a',
  templateUrl: './default-a.component.html',
  styleUrls: ['./default-a.component.css']
})
export class DefaultAComponent implements OnInit {
  welcome: string;

  constructor(private defaultAService: DefaultAService,
              private defaultBService: DefaultBService,
              private defaultCHttpService: DefaultCHttpService) { }

  ngOnInit(): void {}

  consoleLog(): void {
      console.log(this.defaultAService.getValue());
      console.log(this.defaultBService.getValue());
      this.defaultCHttpService.getValue().subscribe(
        value => {
          console.log(value);
        },
        error => {
          console.log(error);
        });
  }
}
