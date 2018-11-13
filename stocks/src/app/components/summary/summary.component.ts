import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  @Input() stock: any;

  constructor() { }

  ngOnInit() {
  }

  isPositive() {
    console.log(this.stock);

    return this.stock.change > 0;
  }

  isNegative() {
    console.log(this.stock);

    return this.stock.change < 0;
  }

}
