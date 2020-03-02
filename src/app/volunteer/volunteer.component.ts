import { Component, OnInit } from '@angular/core';
import { Volunteer } from '../models/volunteer';

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.css']
})
export class VolunteerComponent implements OnInit {

  volunteerModel = new Volunteer('', '', '', null, '', false, false,
    false, false)

  formSubmit() {
    const form = document.getElementById('volunteerForm');
    form.style.display = 'none';
    const message = document.getElementById('submitMessage');
    message.style.display = 'block';
  }
  constructor() {}
  ngOnInit() {}
}
