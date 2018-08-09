import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'week4';
  ngOnInit() {
    if (typeof(Storage) != "undefined") {
      var user = {id : 1, username: "", dob : "22/06/1998", age : 20};
      sessionStorage.setItem("user", JSON.stringify(user));
    }
  }
}
