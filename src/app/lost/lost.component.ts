/* Authors: Erin Johnston and Elliot Murdock */

import { Component, OnInit } from '@angular/core';
import { Option } from '../models/option';
import {LostAnimal} from '../models/lost-animal';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-lost-found',
  templateUrl: './lost.component.html',
  styleUrls: ['./lost.component.css']
})
export class LostComponent implements OnInit {

  constructor(private http: HttpClient) {}

  pets: Option[] = [
    {value: 'Dogs and Puppies', viewValue: 'Dog/Puppy'},
    {value: 'Cats and Kittens', viewValue: 'Cat/Kitten'},
    {value: 'Rodents', viewValue: 'Rodent'},
    {value: 'Birds', viewValue: 'Bird'},
    {value: 'Reptiles', viewValue: 'Reptile'}
  ];

  phpResponse = '';
  lostAnimalModel = new LostAnimal('', '', '', '', '', '', false,
    '', '', '', '', '');

  confirm = function() {
    const form = document.getElementById('lostAnimalForm');
    form.style.display = 'none';
    const message = document.getElementById('submitMessage');
    message.style.display = 'block';
  }

  onSubmit = function(form: any): void {
    let params = JSON.stringify(form);

    this.http.post('http://localhost/animal-shelter/lostPet-form.php', params)
    .subscribe((data) => {
      this.phpResponse = data;    
    }, (error) => {
      console.log(error);
      this.phpResponse = "There was an error. Please resubmit the form.";
    })
  }

  ngOnInit() {}
}
