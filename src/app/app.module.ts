import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';


import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { ProjectComponent } from './project/project.component';
import { SkillsComponent } from './skills/skills.component';
import { InternshipComponent } from './internship/internship.component';
import { CertificateComponent } from './certificate/certificate.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftNavComponent,
    HomeComponent,
    AboutComponent,
    EducationComponent,
    ProjectComponent,
    SkillsComponent,
    InternshipComponent,
    CertificateComponent,
    YoutubeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatCardModule,
    MatButtonModule,
    MatStepperModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
