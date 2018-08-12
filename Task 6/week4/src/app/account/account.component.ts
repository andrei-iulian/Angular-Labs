import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  id : Number;
  username : String = "";
  dob : String = "";
  age : Number;


  constructor(private router: Router, private form: FormsModule) {
    if ('user' in sessionStorage) { 
      var user = JSON.parse(sessionStorage.user);
      this.id = user.id;
      this.username = user.username;
      this.dob = user.dob;
      this.age = user.age;
    }
   }

  ngOnInit() {
  }

  logoutUser(event) {
    event.preventDefault();
    sessionStorage.clear();
    this.router.navigateByUrl('/login');
  }

}
