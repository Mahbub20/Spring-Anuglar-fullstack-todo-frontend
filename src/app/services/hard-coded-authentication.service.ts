import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardCodedAuthenticationService {

  constructor() { }

  authenticate(username: string, password:string){
    if(username === "mahbub" && password === "dummy"){
      sessionStorage.setItem('authenticateUser',username);
      return true;
    }
    else{
      return false;
    }
  }

  isLoggedIn(){
    let user = sessionStorage.getItem('authenticateUser');
    return !(user === null);
  }

  logout(){
    sessionStorage.removeItem('authenticateUser');
  }
}
