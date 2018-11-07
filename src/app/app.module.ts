import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientdataComponent } from './components/patientdata/patientdata.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFaqModule } from '@angular-material-extensions/faq';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { ServicesComponent } from './components/services/services.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { OurdoctorsComponent } from './components/ourdoctors/ourdoctors.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { TomcatService } from './services/Tomcat/tomcat.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    PatientdataComponent,
    FaqsComponent,
    AboutusComponent,
    AppointmentComponent,
    ServicesComponent,
    GalleryComponent,
    OurdoctorsComponent,
    ContactusComponent,
    FooterComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatExpansionModule,
    AngularFontAwesomeModule,
    MatFaqModule.forRoot()
  ],
  providers: [TomcatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
