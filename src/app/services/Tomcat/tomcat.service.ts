import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PatientInfo } from '../../components/appointment/patientinfo';

@Injectable({
  providedIn: 'root'
})
export class TomcatService {

  apiURL = 'https://localhost:8443/users/all';
  apiPostURL = 'http://localhost:8080/users/1';
  gitdata: any;


  constructor(private _httpclient: HttpClient) { }

  getData(): Observable<any> {

    return this._httpclient.get(this.apiURL);

  }

  createArticle(article: PatientInfo): Observable<PatientInfo> {
    console.log('Inside the Serivce:::');
    let httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    let options = { headers: httpHeaders };
    /*return this._httpclient.post<PatientInfo>(this.apiPostURL, article, options).subscribe((response) => {
      this.gitdata = response;
      console.log('data recieved' + JSON.stringify(response));
    });*/

    return this._httpclient.post<PatientInfo>(this.apiPostURL, article, options) ;


  }
}
