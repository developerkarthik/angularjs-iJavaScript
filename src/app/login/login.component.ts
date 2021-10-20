import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServices } from '../services/auth.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  btnClicked: boolean = false;
  isValid: boolean = false;
  signinForm  = new FormGroup({
    "cust_id": new FormControl(null, [Validators.required]),
    "password": new FormControl(null, [
      Validators.required, 
      Validators.minLength(8), 
      Validators.maxLength(20)])
  });
  
  constructor(private authService: AuthServices, private router: Router) { }
  
  ngOnInit(): void {
  }

  doLogin(){
    this.btnClicked = true;
    if(this.signinForm.status === "INVALID"){
      this.isValid = false;
    }else{
      this.isValid = true;
      let cust_id = this.signinForm.value.cust_id;
      let password = this.signinForm.value.password;
      this.authService.checkAuthentication(cust_id, password).subscribe(data => {
        if(data.isUserAuthenticated){
          this.router.navigate(['/dashboard']);
        }else{
          this.btnClicked = true;
          this.isValid = false;
        }
      });
    }
  }

}
