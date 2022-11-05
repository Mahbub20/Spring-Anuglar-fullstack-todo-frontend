import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardCodedAuthenticationService } from '../services/hard-coded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = "mahbub";
  password: string = "";
  isLoginError : boolean = false;

  constructor(private router: Router,
              private hardCodedAuthenticationService : HardCodedAuthenticationService) { }

  ngOnInit(): void {
  }

  login(){
    if(this.hardCodedAuthenticationService.authenticate(this.username, this.password)){
      this.router.navigate(['welcome', this.username]); 
      this.isLoginError = false;
    }
    else{
      this.isLoginError = true;
    }
    
  }

  isLoggedIn(){
    let user = sessionStorage.getItem('authenticateUser');
    return !(user === null);
  }

}
