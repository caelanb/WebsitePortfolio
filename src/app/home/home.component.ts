import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faLinkedin, faFacebookSquare, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  faLinkedIn = faLinkedin;
  faFacebookSquare = faFacebookSquare;
  faGithubSquare = faGithubSquare;
  faEnvelopeSquare = faEnvelopeSquare;

  constructor( private router: Router ) { }

  onHomeClick() {
    this.router.navigateByUrl('home');
  }

  onProjectsClick() {
    this.router.navigateByUrl('projects');
  }

  onResumeClick() {
    console.log('hi');
  }

  ngOnInit() {
  }

}
