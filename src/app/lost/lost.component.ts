import { Component, OnInit } from '@angular/core';
import { Option } from '../models/option';
import {LostAnimal} from '../models/lost-animal';

@Component({
  selector: 'app-lost-found',
  templateUrl: './lost.component.html',
  styleUrls: ['./lost.component.css']
})
export class LostComponent implements OnInit {

  pets: Option[] = [
    {value: 'Dogs and Puppies', viewValue: 'Dog/Puppy'},
    {value: 'Cats and Kittens', viewValue: 'Cat/Kitten'},
    {value: 'Rodents', viewValue: 'Rodent'},
    {value: 'Birds', viewValue: 'Bird'},
    {value: 'Reptiles', viewValue: 'Reptile'}
  ];

  lostAnimalModel = new LostAnimal('', '', '', '', '', '', null, false,
    '', '', '', '', null);

  formSubmit() {
    const form = document.getElementById('lostAnimalForm');
    form.style.display = 'none';
    const message = document.getElementById('submitMessage');
    message.style.display = 'block';
  }

  constructor() { }

  ngOnInit() {
  }

}
