import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
import { withBody } from '../../../node_modules/@angular/core/testing';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string = '';
  password:string = '';

  constructor(private router: Router, private form: FormsModule, private http: HttpClient) {

  }

  ngOnInit() {
  }



  loginUser(event) {
    event.preventDefault();
    let url = '/login';
    this.http.post(url, { username: this.username, password: this.password}).subscribe( 
      res => {
        if (res === true) {
            if (typeof(Storage) != "undefined") {
              var user = {id : 1, username: "GreatG", dob : "22/06/1998", age : 20};
              sessionStorage.setItem("user", JSON.stringify(user));
            }
            sessionStorage.user = JSON.stringify(user);
            this.router.navigateByUrl('/account');
        } else {
            alert("Wrong Username and Password!");
        }
      });
  }  
}
