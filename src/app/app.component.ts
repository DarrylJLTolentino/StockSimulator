import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = "Stock Simulator";

  constructor(private http: HttpClient) {

    var link = 'https://staging-api.brainbase.com/stocks.php';

    this.http.get(link).toPromise().then(data => {
      console.log(data);
    });
  }

}
