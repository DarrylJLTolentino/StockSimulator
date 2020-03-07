import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = "Stock Simulator";

  companies = [];

  today: number = Date.now();

  // companyName = [];
  // companySymbol = [];
  // companyPrice = [];
  // counter = 0;

  constructor(private http: HttpClient) {

    var link = 'https://staging-api.brainbase.com/stocks.php';

    this.http.get(link).toPromise().then(data => {
      console.log(data);

      for (let key in data) {
        if (data.hasOwnProperty(key)) {
          this.companies.push(data[key]);
        }
      }

      // for (let key in data) {
      //   if (data.hasOwnProperty(key)) {
      //     this.companyName.push(data[key].name);
      //     this.companySymbol.push(data[key].symbol);
      //     this.companyPrice.push(data[key].price);
      //     this.counter++;
      //   }
      // }

      console.log(this.companies);
      
      // console.log(this.companyName);
      // console.log(this.companySymbol);
      // console.log(this.companyPrice);

    });
  }


}
