import { DOCUMENT } from '@angular/common';
import { Component, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TomcatService } from './services/Tomcat/tomcat.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Medics Expert – Consultation';

  gitdata: any;
  @ViewChild('stickyMenu') menuElement: ElementRef;
  sticky = false;
  elementPosition: any;

  heightD = ['50%'];

  images = ['https://serving.photos.photobox.com/34156944745394a28ce5b0df584c8ce84cf0eeb36cb368813a415fb0ad4b4ec8c698430b.jpg',
    '/src/images/medics99.png',
    '/src/images/6.png', '/src/images/19.png',
    '/src/images/19.png',
    '/src/images/19.png'];

  constructor(private _tomcatservice: TomcatService) { }

  getData(): void {
    this.gitdata = this._tomcatservice.getData().subscribe((response) => {
      this.gitdata = response;
      console.log('data recieved' + JSON.stringify(response));
    });

    console.log('Component::' + this.gitdata);
  }
  /*getData(): void {
     this._httpclient.get(this.apiURL).subscribe((response) => {
      this.gitdata = response;
      console.log('data recieved'+JSON.stringify(response));
    });

  }*/

  // tslint:disable-next-line:use-life-cycle-interface
  /*ngAfterViewInit() {
    this.elementPosition = this.menuElement.nativeElement.offsetTop;
  }*/

  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    $(function () {
      $(document).scroll(function () {
        const $nav = $('.navbar-fixed-top');
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      });
    });
  }

}
