import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patientdata',
  templateUrl: './patientdata.component.html',
  styleUrls: ['./patientdata.component.css']
})
export class PatientdataComponent {
  city = 'Hyderabad';
  dob = '21-DEC-1994';
  country = 'India';
  items = ['Fever', 'Couge'];
  attachments = ['X-ray', 'Prescriptions'];
  id = 'ravi.devireddy07' ;
}