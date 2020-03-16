import {Component, Input, OnInit} from '@angular/core';
import {Car} from '../car';

@Component({
  selector: 'app-car-list-show',
  templateUrl: './car-list-show.component.html',
  styleUrls: ['./car-list-show.component.scss']
})
export class CarListShowComponent implements OnInit {

  @Input() car: Car;

  constructor() {
  }

  ngOnInit() {
  }

  getCategoryColorByCarCost(carCost: number) {
    if (carCost < 7) {
      return 'gray';
    }
    if (carCost < 11) {
      return 'green';
    }
    if (carCost < 15) {
      return 'blue';
    }
    if (carCost < 19) {
      return 'yellow';
    }
    if (carCost < 23) {
      return 'red';
    }
    if (carCost < 27) {
      return 'purple';
    } else {
      return 'gold';
    }
  }

}