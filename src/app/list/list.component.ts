import { Component, Input, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [AppComponent],
})
export class ListComponent implements OnInit {
  @Input() textInput: string;
  list: Array<string> = [];

  constructor() {}

  ngOnInit() {}

  buttonClick(): void {
    this.list.push(this.textInput);
  }

  delete(element: string): void {
    this.list.forEach((value, index) => {
      if (value == element) this.list.splice(index, 1);
    });
  }
}
