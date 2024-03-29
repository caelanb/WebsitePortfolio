import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { MaterialModule } from './material.module';
import { ProjectsComponent } from './projects/projects.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ResumeComponent } from './resume/resume.component';

import { CommonModule } from '@angular/common';

import { CarouselModule, WavesModule } from 'angular-bootstrap-md';
import { HouseComponent } from './house/house.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    ResumeComponent,
    HouseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    CommonModule,
    CarouselModule,
    WavesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
