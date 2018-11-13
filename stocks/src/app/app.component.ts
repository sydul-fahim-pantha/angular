import { Component } from '@angular/core';
import { StockInterface, StocksService } from './sevices/stocks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  stocks: Array<StockInterface>;

  constructor(service: StocksService) {
    service.load(['AAPL']).subscribe( stocks => {
      this.stocks = stocks;
      console.log('AppComponent load>>>>>>>>>> ');
      console.log('AppComponent >>>>>>>>>> ' + stocks);
      console.log(this.stocks);
    });

    console.log('AppComponent >>>>>>>>>> ');
    console.log(this.stocks);
  }
}
