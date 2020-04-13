/* Authors: Erin Johnston and Elliot Murdock */

import { Component, OnInit } from '@angular/core';
import { Option } from '../models/option';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import {Pet} from '../models/pet';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  title = 'animalShelter';

  pets: Option[] = [
    {value: 'Any', viewValue: 'Any'},
    {value: 'Dog', viewValue: 'Dog'},
    {value: 'Cat', viewValue: 'Cat'},
    {value: 'Rodent', viewValue: 'Rodent'},
    {value: 'Bird', viewValue: 'Bird'},
    {value: 'Reptile', viewValue: 'Reptile'}
    ];

  genders: Option[] = [
    {value: 'Any', viewValue: 'Any'},
    {value: 'Male', viewValue: 'Male'},
    {value: 'Female', viewValue: 'Female'}
  ];

  selectedPetType = '';
  selectedGender = '';
  searchMessage = '';
  responsePets = new Array<Pet>();
  captionText = '';
  modalSrc = '';
  featuredPets = new Array<Pet>();

  searchForPets(petType, gender) {
    if (petType !== '' && gender !== '') {
      const petsOfTheMonth = document.getElementById('petsOfMonth');
      petsOfTheMonth.style.display = 'none';
      this.searchMessage = 'You have searched for ' + gender + ' ' + petType + '.';
      this.http.get<Array<Pet>>('http://localhost/cs4640/animalShelter/main.php?petType=' + petType + '&gender=' + gender)
        .subscribe(
          (data) => {
            console.log('Response ', data);
            this.responsePets = data;
          }, (error) => {
            console.log('Error ', error);
          }
        );
    } else {
      const petTypeError = document.getElementById('petTypeError');
      petTypeError.style.display = 'block';
    }
  }

  getFeaturedPets() {
    this.http.get<Array<Pet>>('http://localhost/cs4640/animalShelter/petsOfMonth.php')
      .subscribe(
        (data) => {
          console.log('Response ', data);
          this.featuredPets = data;
        }, (error) => {
          console.log('Error ', error);
        }
      );
  }

  // displays the image modal
  show = (featuredPet) => {
    const modal = document.getElementById('myModal');
    modal.style.display = 'block';
    this.modalSrc = '../assets/img/' + this.featuredPets[featuredPet].image; // "../assets/img/lola12.jpg"
    this.captionText = '' + this.featuredPets[featuredPet].breed + ', ' + this.featuredPets[featuredPet].gender + ', '
      + this.featuredPets[featuredPet].age;
  }
  // closes the image modal
  close = () => {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
    this.modalSrc = '';
  }

  constructor(private http: HttpClient) {
    this.getFeaturedPets();
  }
  ngOnInit() {}
}
