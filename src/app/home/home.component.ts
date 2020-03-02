import { Component, OnInit } from '@angular/core';

interface Option {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  title = 'animalShelter';

  pets: Option[] = [
    {value: 'Dogs and Puppies', viewValue: 'Dog/Puppy'},
    {value: 'Cats and Kittens', viewValue: 'Cat/Kitten'},
    {value: 'Rodents', viewValue: 'Rodent'},
    {value: 'Birds', viewValue: 'Bird'},
    {value: 'Reptiles', viewValue: 'Reptile'}
    ];

  genders: Option[] = [
    {value: 'Male', viewValue: 'Male'},
    {value: 'Female', viewValue: 'Female'}
  ];

  selectedPetType = '';
  selectedGender = '';

  searchMessage = '';

  searchForPets(petType, gender) {
    const petsOfTheMonth = document.getElementById('petsOfMonth');
    petsOfTheMonth.style.display = 'none';
    this.searchMessage = 'You have searched for ' + gender + ' ' + petType + '.';
  }

  constructor() {}
  ngOnInit() {}
}
