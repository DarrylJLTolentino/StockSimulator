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

  // Creating array named companies
  companies = [];

  // Initializing momentjs
  m = moment();

  // Initializing date with day of the week, month, day of the month, and year
  date = this.m.format("dddd, MMMM Do YYYY");

  // Creating variable named counter and setting it equal to zero.
  counter = 0;

  // companyName = [];
  // companySymbol = [];
  // companyPrice = [];
  // counter = 0;

  constructor(private http: HttpClient) {

    // Creating var for link of API
    var link = 'https://staging-api.brainbase.com/stocks.php';

    // Using link for API get function which promises to...
    this.http.get(link).toPromise().then(data => {

      // log the data on the console for debugging
      console.log(data);

      // a for loop for object of objects to create elements in the companies array
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

      // logging what companies is equal to for debugging
      console.log(this.companies);

      // for loop to add the initial, civ, and csi keys to each element within the companies array
      for (var i = 0; i < this.companies.length; i++) {
        this.companies[i]['initial'] = this.companies[i].price;
        this.companies[i]['civ'] = 0.0;
        this.companies[i]['csi'] = 0.0;     
      }

      // console.log(this.companyName);
      // console.log(this.companySymbol);
      // console.log(this.companyPrice);

    });
  }

  // Function of the click event handler associated with button on line 39 in app.component.html
  forwardDay() {

    // for loop for math logic begins
    for (var i = 0; i < this.companies.length; i++) {

      // for each company price, create a random number from 0 through 209
      var temp = this.companies[i].price;
      var random = Math.floor(Math.random() * Math.floor(210))

      // if random number is 0 through 9
      if (random > -1 && random < 10) {
        //price falls 10%
        temp = temp - (temp * .1);
      }
      // if random number is 10 through 19
      else if (random > 9 && random < 20) {
        //price falls 9%
        temp = temp - (temp * .09);
      }
      // if random number is 20 through 29
      else if (random > 19 && random < 30) {
        //price falls 8%
        temp = temp - (temp * .08);
      }
      // if random number is 30 through 39
      else if (random > 29 && random < 40) {
        //price falls 7%
        temp = temp - (temp * .07);
      }
      // if random number is 40 through 49
      else if (random > 39 && random < 50) {
        //price falls 6%
        temp = temp - (temp * .06);
      }
      // if random number is 50 through 59
      else if (random > 49 && random < 60) {
        //price falls 5%
        temp = temp - (temp * .05);
      }
      // if random number is 60 through 69
      else if (random > 59 && random < 70) {
        //price falls 4%
        temp = temp - (temp * .04);
      }
      // if random number is 70 through 79
      else if (random > 69 && random < 80) {
        //price falls 3%
        temp = temp - (temp * .03);
      }
      // if random number is 80 through 89
      else if (random > 79 && random < 90) {
        //price falls 2%
        temp = temp - (temp * .02);
      }
      // if random number is 90 through 99
      else if (random > 89 && random < 100) {
        //price falls 1%
        temp = temp - (temp * .01);
      }
      // if random number is 110 through 119
      else if (random > 109 && random < 120) {
        //price rises 1%
        temp = temp + (temp * .01);
      }
      // if random number is 120 through 129
      else if (random > 119 && random < 130) {
        //price rises 2%
        temp = temp + (temp * .02);
      }
      // if random number is 130 through 139
      else if (random > 129 && random < 140) {
        //price rises 3%
        temp = temp + (temp * .03);
      }
      // if random number is 140 through 149
      else if (random > 139 && random < 150) {
        //price rises 4%
        temp = temp + (temp * .04);
      }
      // if random number is 150 through 159
      else if (random > 149 && random < 160) {
        //price rises 5%
        temp = temp + (temp * .05);
      }
      // if random number is 160 through 169
      else if (random > 159 && random < 170) {
        //price rises 6%
        temp = temp + (temp * .06);
      }
      // if random number is 170 through 179
      else if (random > 169 && random < 180) {
        //price rises 7%
        temp = temp + (temp * .07);
      }
      // if random number is 180 through 189
      else if (random > 179 && random < 190) {
        //price rises 8%
        temp = temp + (temp * .08);
      }
      // if random number is 190 through 199
      else if (random > 189 && random < 200) {
        //price rises 9%
        temp = temp + (temp * .09);
      }
      // if random number is 200 through 209
      else if (random > 199 && random < 210) {
        //price rises 10%
        temp = temp + (temp * .1);
      }
      // if random number is 100 through 109
      else {
        //price stays the same
        temp = temp;
      }

      // setting price in array with new price
      this.companies[i].price = temp;
      // calculation of change in value
      this.companies[i].civ = (Math.abs(this.companies[i].price - this.companies[i].initial));
      // calculation of change since initial price
      this.companies[i].csi = (((this.companies[i].price / this.companies[i].initial) * 100) - 100);
    }
    // console.log(this.initial);

    // incrementing counter by 1
    this.counter++;
    // logging counter for debugging purposes
    console.log(this.counter);
    // adding one day to the initialized moment using moment.js
    this.m = this.m.add(1, 'day');
    // changing format of moment to day of the week, month, day of the month, and year
    this.date = this.m.format("dddd, MMMM Do YYYY");
    // logging a message for debugging to check if button event handler triggered
    console.log("Click went off");
  }
}
