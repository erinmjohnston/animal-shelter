/* Authors: Erin Johnston and Elliot Murdock */

import { Component, OnInit } from '@angular/core';
import { Option } from '../models/option';
import { AdoptionApplication } from '../models/adoption-application';

@Component({
  selector: 'app-adopt',
  templateUrl: './adopt.component.html',
  styleUrls: ['./adopt.component.css']
})
export class AdoptComponent implements OnInit {

  pets: Option[] = [
    {value: 'Dogs and Puppies', viewValue: 'Dog/Puppy'},
    {value: 'Cats and Kittens', viewValue: 'Cat/Kitten'},
    {value: 'Rodents', viewValue: 'Rodent'},
    {value: 'Birds', viewValue: 'Bird'},
    {value: 'Reptiles', viewValue: 'Reptile'}
  ];

  adoptionApplicationModel = new AdoptionApplication('', '', '', null, '', '',
  '', '', '', '', '', '');

  formSubmit = function() {
    const form = document.getElementById('adoptForm');
    form.style.display = 'none';
    const message = document.getElementById('submitMessage');
    message.style.display = 'block';
  };

  constructor() { }

  ngOnInit() {
  }

}
