import { Component, OnInit } from '@angular/core';
import { StockInterface, StocksService } from '../../sevices/stocks.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  stocks: Array<StockInterface>;
  symbols: Array<string>;

  constructor(private service: StocksService) {
    this.symbols = service.get();
  }

  ngOnInit() {
    this.service.load(this.symbols).subscribe( stocks => {
      this.stocks = stocks;
      console.log('DashComponent load AAPL>>>>>>>>>> ');
      console.log('DashComponent >>>>>>>>>> ' + stocks);
      console.log(this.stocks);
    });

    console.log('DashComponent >>>>>>>>>> ');
    console.log(this.stocks);
  }
}
