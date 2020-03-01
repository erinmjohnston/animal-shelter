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
    {value: 'dog-puppy', viewValue: 'Dog/Puppy'},
    {value: 'cat-kitten', viewValue: 'Cat/Kitten'},
    {value: 'rodent', viewValue: 'Rodent'},
    {value: 'bird', viewValue: 'Bird'},
    {value: 'reptile', viewValue: 'Reptile'}
    ];

  genders: Option[] = [
    {value: 'male', viewValue: 'Male'},
    {value: 'female', viewValue: 'Female'}
  ];

  constructor() {}
  ngOnInit() {}
}