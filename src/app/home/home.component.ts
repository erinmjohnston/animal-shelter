/* Authors: Erin Johnston and Elliot Murdock */

import { Component, OnInit } from '@angular/core';
import {Option} from '../models/option';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  title = 'animalShelter';

  pets: Option[] = [
    {value: 'Any', viewValue: 'Any'},
    {value: 'Dogs and Puppies', viewValue: 'Dog/Puppy'},
    {value: 'Cats and Kittens', viewValue: 'Cat/Kitten'},
    {value: 'Rodents', viewValue: 'Rodent'},
    {value: 'Birds', viewValue: 'Bird'},
    {value: 'Reptiles', viewValue: 'Reptile'}
    ];

  genders: Option[] = [
    {value: 'Any', viewValue: 'Any'},
    {value: 'Male', viewValue: 'Male'},
    {value: 'Female', viewValue: 'Female'}
  ];

  selectedPetType = '';
  selectedGender = '';
  searchMessage = '';
  captionText = '';
  modalSrc = '';

  searchForPets(petType, gender) {
    if (petType !== '' && gender !== '') {
      const petsOfTheMonth = document.getElementById('petsOfMonth');
      petsOfTheMonth.style.display = 'none';
      this.searchMessage = 'You have searched for ' + gender + ' ' + petType + '.';
    } else {
      const petTypeError = document.getElementById('petTypeError');
      petTypeError.style.display = 'block';
    }
  }

  // displays the image modal
  show = (name, text) => {
    const modal = document.getElementById('myModal');
    const modalImg = document.getElementById('img01');
    modal.style.display = 'block';
    this.modalSrc = ''.concat('../assets/img/', name, '.jpg'); // "../assets/img/lola.jpg"
    this.captionText = text;
  }
  // closes the image modal
  close = () => {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
    this.modalSrc = '';
  }

  constructor() {}
  ngOnInit() {}
}
