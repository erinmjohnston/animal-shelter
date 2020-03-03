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

  searchForPets(petType, gender) {
    if (petType !== '' && gender !== '') {
      const petsOfTheMonth = document.getElementById('petsOfMonth');
      petsOfTheMonth.style.display = 'none';
      this.searchMessage = 'You have searched for ' + gender + ' ' + petType + '.';
    }
    else {
      const petTypeError = document.getElementById('petTypeError');
      petTypeError.style.display = 'block';
    }
  }

  constructor() {}
  ngOnInit() {}
}
