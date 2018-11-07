import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurdoctorsComponent } from './ourdoctors.component';

describe('OurdoctorsComponent', () => {
  let component: OurdoctorsComponent;
  let fixture: ComponentFixture<OurdoctorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurdoctorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurdoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
