import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray, NgForm } from '@angular/forms';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { PatientInfo } from './patientinfo';
import { TomcatService } from '../../services/Tomcat/tomcat.service';
@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  public rows: { reasons: string }[];
  isRowAdded = true;
  constructor(private articleService: TomcatService, private formBuilder: FormBuilder, private http: HttpClient) {
    this.rows = [];
  }
  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }
  model;
  title = 'My Expert Medics';
  registerForm: FormGroup;
  submitted = false;
  dataSaved = false;
  articleForm: FormGroup;
  headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
  res: any;
  posts: any;
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      dob: ['', Validators.required],
      diagnosis: ['', Validators.required],
      phnum: ['', Validators.required],
      reasons: ['', Validators.required],
      problem: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    // Initialize Params Object
    let Params = new HttpParams();
    // Begin assigning parameters
    Params = Params.append('firstParameter', this.registerForm.value.firstName);
    Params = Params.append('secondParameter', this.registerForm.value.lastName);

    /* return this.http.post('http://localhost:8080/RESTWebService/rest/lvcalc/rsfsjson', {params: { params: Params }}).subscribe(data => {
         this.posts = data;
         console.log(this.posts);
       });  */


    return this.http.post('http://localhost:8080/users/1', 'Hello', {
      headers: new HttpHeaders({
        'Content-type': 'text/palin',
        'responseType': 'text/palin'
      })
    }).subscribe(
      data => {
        console.log('POST Request is successful==', data);
      },
      error => {
        console.log('Error==', error);
      }
    );

  }

  onAddRow(rowVal) {
    if (this.rows.indexOf(rowVal) === -1 || this.rows.length === 0) {
      this.rows.push(rowVal);
    } else {
      alert('Reason Already added');
    }
  }

  createItemFormGroup(): FormGroup {
    return this.formBuilder.group({
      reasons: null
    });
  }

  onFormSubmit() {
    console.log('Form Submiited..');
    this.dataSaved = false;
    const patientinfo = this.registerForm.value;
    console.log('firstName===' + patientinfo.firstname);
    console.log('lastname=' + patientinfo.lastname);
    console.log('email=' + patientinfo.email);
    console.log('phnum=' + patientinfo.phnum);
    console.log('reason=' + patientinfo.reasons);
    console.log('DOB=' + patientinfo.dob);
    console.log('Diagnosis=' + patientinfo.diagnosis);

    // this.createArticle(patientinfo);
    this.articleService.createArticle(patientinfo).subscribe(
      article => {
        console.log(article);
        this.dataSaved = true;
      },
      err => {
        console.log(err);
      }
    );
    this.registerForm.reset();
  }
}
