import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  IsPrivacyHidden = true;
  IsReprintHidden = true;
  IsMediaHidden = true;



  constructor() { }

  ngOnInit() {
  }


  onSelect(id: String) {

    if (id === 'privacy') {
      this.IsPrivacyHidden = !this.IsPrivacyHidden;
      this.IsReprintHidden = true;
      this.IsMediaHidden = true;
    }
    if (id === 'reprint') {
      this.IsReprintHidden = !this.IsReprintHidden;
      this.IsMediaHidden = true;
      this.IsPrivacyHidden = true;
    }

    if (id === 'media') {
      this.IsMediaHidden = !this.IsMediaHidden;
      this.IsReprintHidden = true;
      this.IsPrivacyHidden = true;
    }
  }
}