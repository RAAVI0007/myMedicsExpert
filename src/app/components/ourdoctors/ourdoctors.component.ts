import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Profile } from './profile.model';


@Component({
  selector: 'app-ourdoctors',
  templateUrl: './ourdoctors.component.html',
  styleUrls: ['./ourdoctors.component.css']
})
export class OurdoctorsComponent implements OnInit {

  IsPrivacyHidden = true;
  IsReprintHidden = true;
  IsMediaHidden = true;
  images = ['/src/images/doc1.jpg', '/src/images/doc2.jpeg', '/src/images/doc3.jpg'];


  doctors  = [

    {
      idNum: 'Doctor-1',
      details: '23323232',
      imagepath: '/src/images/doc1.jpg'
    },
    {
      idNum: 'Doctor-2',
      details: 'dasdadsdd',
      imagepath: '/src/images/doc2.jpeg'
    },
    {
      idNum: 'Doctor-3',
      details: '3333333',
      imagepath: 'https://serving.photos.photobox.com/357543241517abeb3e07cb5dacc511cad38b1a8e5e8dcd24c45b3d7fdae422c80541acd0.jpg'
    }


  ];

  closeResult: string;

  constructor(private modalService: NgbModal) { }



  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => { });
  }

  ngOnInit() {
  }

}
