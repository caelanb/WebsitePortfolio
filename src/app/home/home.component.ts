import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { faLinkedin, faFacebookSquare, faGithubSquare, faHackerrank } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare, faBars } from '@fortawesome/free-solid-svg-icons';

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
  faBars = faBars;
  faHackerrank = faHackerrank;
  opened: boolean;
  showToolbarNav: boolean;
  innerWidth: any;

  constructor( private router: Router ) { }

  onHomeClick() {
    this.router.navigateByUrl('home');
  }

  onProjectsClick() {
    this.router.navigateByUrl('projects');
  }

  onResumeClick() {
    this.router.navigateByUrl('resume');
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;

    if (this.innerWidth < 800) {
      this.showToolbarNav = true;
    } else {
      this.showToolbarNav = false;
    }
  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;

    if (this.innerWidth < 800) {
      this.showToolbarNav = true;
    } else {
      this.showToolbarNav = false;
    }
  }

}
