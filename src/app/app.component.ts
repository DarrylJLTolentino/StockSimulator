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

      // logging what companies is equal to for debugging
      console.log(this.companies);

      // for loop to add the initial, civ, and csi keys to each element within the companies array
      for (var i = 0; i < this.companies.length; i++) {
        this.companies[i]['initial'] = this.companies[i].price;
        this.companies[i]['civ'] = 0.0;
        this.companies[i]['csi'] = 0.0;
      }

    });
  }

  // Function of the click event handler associated with button on line 39 in app.component.html
  forwardDay() {

    // for loop for math logic begins
    for (var i = 0; i < this.companies.length; i++) {

      // for each company price
      var temp = this.companies[i].price;
      // there is a number between 0 to 10, both inclusive
      var random = Math.floor(Math.random() * 11);
      // there is a number between 0 and 1 to determine positive or negative
      var operator = Math.floor(Math.random() * 2);
      // if random does not equal 0
      if (random != 0) {
        // if operator equals 0, operator is positive
        if (operator === 0) {
          temp += temp * (random / 100);
        }
        // if operator equals 1, operator is negative
        else {
          temp += temp * ((-1 * random) / 100);
        }
      }
      // if random is 0, there is no change.

      // setting price in array with new price
      this.companies[i].price = temp;
      // calculation of change in value
      this.companies[i].civ = (Math.abs(this.companies[i].price - this.companies[i].initial));
      // calculation of change since initial price
      this.companies[i].csi = (((this.companies[i].price / this.companies[i].initial) * 100) - 100);
    }

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
