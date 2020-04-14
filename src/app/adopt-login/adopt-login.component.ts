/* Authors: Erin Johnston and Elliot Murdock */

import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { SignIn } from '../models/sign-in';

@Component({
  selector: 'app-adopt-login',
  templateUrl: './adopt-login.component.html',
  styleUrls: ['./adopt-login.component.css']
})
export class AdoptLoginComponent implements OnInit {

  constructor(private http: HttpClient) {}

  signInModel = new SignIn('','');
  
  phpResponse = '';

  onSubmit = function(form: any): void {
    let params = JSON.stringify(form);
    this.http.post('http://localhost/animal-shelter/login.php', params)
    .subscribe((data) => {
         this.phpResponse = data;  
         console.log(data);  
    }, (error) => {
      console.log(error);
      this.phpResponse = "There was an error. Please resubmit the form.";
    })
  }
  ngOnInit() {}

}
