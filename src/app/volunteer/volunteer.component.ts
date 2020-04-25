/* Authors: Erin Johnston and Elliot Murdock */

import { Component, OnInit } from '@angular/core';
import { Volunteer } from '../models/volunteer';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.css']
})
export class VolunteerComponent implements OnInit {

  constructor(private http: HttpClient) {}

  error = '';
  phpResponse = '';
  volunteerModel = new Volunteer('', '', '', '', '', false, false,
    false, false)

  confirm = function() {
    const form = document.getElementById('volunteerForm');
    form.style.display = 'none';
    const message = document.getElementById('submitMessage');
    message.style.display = 'block';
  }

  onSubmit = function(form: any): void {
    
    // Convert the form data to json format
    let params = JSON.stringify(form);

    // To send a POST request, pass data as an object
    this.http.post('http://localhost/animal-shelter/volunteer-form.php', params)
    .subscribe((data) => {
      this.phpResponse = data; 
    }, (error) => {
      console.log(error);
      this.error = "There was an error. Please resubmit the form. Make sure email is included if not already."
    })
  
  }
  ngOnInit() {}
}
