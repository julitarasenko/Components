import { Component, Input, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { RandomService } from './random.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css'],
  providers: [AppComponent],
})
export class RandomComponent implements OnInit {
  @Input() public max: number;
  random: number;
  str: string;
  color: string;

  constructor(private randomService: RandomService) {
    this.max;
  }

  ngOnInit() {}

  buttonClick(): void {
    this.random = this.randomService.random(this.max);
    this.str = this.randomService.description(this.max);
    this.color = this.randomService.description_color();
  }
}
