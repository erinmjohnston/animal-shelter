/* Authors: Erin Johnston and Elliot Murdock */

import { Component, OnInit } from '@angular/core';
import { Option } from '../models/option';
import { AdoptionApplication } from '../models/adoption-application';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { isEmptyExpression } from '@angular/compiler';
import { SignIn } from '../models/sign-in';

@Component({
  selector: 'app-adopt',
  templateUrl: './adopt.component.html',
  styleUrls: ['./adopt.component.css']
})
export class AdoptComponent implements OnInit {

  constructor(private http: HttpClient) {}

  pets: Option[] = [
    {value: 'Dogs and Puppies', viewValue: 'Dog/Puppy'},
    {value: 'Cats and Kittens', viewValue: 'Cat/Kitten'},
    {value: 'Rodents', viewValue: 'Rodent'},
    {value: 'Birds', viewValue: 'Bird'},
    {value: 'Reptiles', viewValue: 'Reptile'}
  ];

  error = '';
  phpResponse = '';
  signInModel = new SignIn('','');
  adoptionApplicationModel = new AdoptionApplication('', '', '', '', '', '',
  '', '', '', '', '', '');

  confirm = function() { //hides adoptForm and displays submitMessage
    const form = document.getElementById('adoptForm');
    form.style.display = 'none';
    const message = document.getElementById('submitMessage');
    message.style.display = 'block';
  };

  displayAdoptForm = function() { //hides sessionForm, submitMessage and displays adoptForm
    const form = document.getElementById('adoptForm');
    form.style.display = 'block';
    const session = document.getElementById('sessionForm');
    session.style.display = 'none';
    const message = document.getElementById('submitMessage');
    message.style.display = 'none';
  };

  displayPreviousSubmission = function() { //hides sessionForm and displays submitMessage
    const message = document.getElementById('submitMessage');
    message.style.display = 'block';
    const session = document.getElementById('sessionForm');
    session.style.display = 'none';
  };

  isEmpty = function (obj) { //checks for empty data, used for checking if returning user
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
  };

  onSubmitApply = function(form: any): void {

    let params = JSON.stringify(form);

    this.http.post('http://localhost/animal-shelter/adoption-form.php', params)
    .subscribe((data) => {
      this.phpResponse = data;
      console.log(this.phpResponse);
    }, (error) => {
      console.log(error);
      this.error = "There was an error. Please resubmit the form. Make sure email is included if not already.";
    })
  };

  onSubmitLogin = function(form: any): void {

    let params = JSON.stringify(form);

    this.http.post('http://localhost/animal-shelter/login.php', params)
    .subscribe((data) => {
      this.phpResponse = data;
      if (this.isEmpty(data)) { //new user, display adoption application form
        this.displayAdoptForm();
      } else { //otherwise, display application corresponding to that username and password
        this.displayPreviousSubmission();
      }
    }, (error) => {
      console.log(error);
      this.error = "There was an error with logging in.";
    })
  };



  ngOnInit() {}

}
