import { Component, OnInit } from '@angular/core';
import { Option } from '../models/option';

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

  constructor() { }

  ngOnInit() {
  }

}
