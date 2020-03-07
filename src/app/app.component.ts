import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = "Stock Simulator";

  companies = [];

  m = moment();

  date = this.m.format("dddd, MMMM Do YYYY");

  counter = 0;

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

  forwardDay() {

    for (var i = 0; i < this.companies.length; i++) {
      var temp = this.companies[i].price;
      var random = Math.floor(Math.random() * Math.floor(210))
      if (random > -1 && random < 10) {
        //price falls 10%
        temp = temp - (temp * .1);
      }
      else if (random > 9 && random < 20) {
        //price falls 9%
        temp = temp - (temp * .09);
      }
      else if (random > 19 && random < 30) {
        //price falls 8%
        temp = temp - (temp * .08);
      }
      else if (random > 29 && random < 40) {
        //price falls 7%
        temp = temp - (temp * .07);
      }
      else if (random > 39 && random < 50) {
        //price falls 6%
        temp = temp - (temp * .06);
      }
      else if (random > 49 && random < 60) {
        //price falls 5%
        temp = temp - (temp * .05);
      }
      else if (random > 59 && random < 70) {
        //price falls 4%
        temp = temp - (temp * .04);
      }
      else if (random > 69 && random < 80) {
        //price falls 3%
        temp = temp - (temp * .03);
      }
      else if (random > 79 && random < 90) {
        //price falls 2%
        temp = temp - (temp * .02);
      }
      else if (random > 89 && random < 100) {
        //price falls 1%
        temp = temp - (temp * .01);
      }
      else if (random > 109 && random < 120) {
        //price rises 1%
        temp = temp + (temp * .01);
      }
      else if (random > 119 && random < 130) {
        //price rises 2%
        temp = temp + (temp * .02);
      }
      else if (random > 129 && random < 140) {
        //price rises 3%
        temp = temp + (temp * .03);
      }
      else if (random > 139 && random < 150) {
        //price rises 4%
        temp = temp + (temp * .04);
      }
      else if (random > 149 && random < 160) {
        //price rises 5%
        temp = temp + (temp * .05);
      }
      else if (random > 159 && random < 170) {
        //price rises 6%
        temp = temp + (temp * .06);
      }
      else if (random > 169 && random < 180) {
        //price rises 7%
        temp = temp + (temp * .07);
      }
      else if (random > 179 && random < 190) {
        //price rises 8%
        temp = temp + (temp * .08);
      }
      else if (random > 189 && random < 200) {
        //price rises 9%
        temp = temp + (temp * .09);
      }
      else if (random > 199 && random < 210) {
        //price rises 10%
        temp = temp + (temp * .1);
      }
      else {
        //price stays the same
        temp = temp;
      }
      this.companies[i].price = temp;
    }
    this.counter++;
    console.log(this.counter);
    this.m = this.m.add(1, 'day');
    this.date = this.m.format("dddd, MMMM Do YYYY");
    console.log("Click went off");
  }
}
