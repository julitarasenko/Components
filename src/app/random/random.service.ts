import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RandomService {
  random_num: number;
  str: string;
  color: string;

  constructor() {}

  public random(max: number): number {
    this.random_num = Math.floor(Math.random() * max);
    return this.random_num;
  }

  public description(max: number): string {
    if (this.random_num <= 0.5 * max) this.str = 'dolna połowa wartości';
    else this.str = 'górna połowa wartości';
    return this.str;
  }

  public description_color(): string {
    if (this.str == 'dolna połowa wartości') this.color = 'green';
    else this.color = 'red';
    return this.color;
  }
}
