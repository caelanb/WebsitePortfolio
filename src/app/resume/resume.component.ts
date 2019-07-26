import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  faBars = faBars;
  showToolbarNav: boolean;
  innerWidth: any;
  opened: boolean;

  constructor( private router: Router ) { }

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

  onHomeClick() {
    this.router.navigateByUrl('home');
  }

  onProjectsClick() {
    this.router.navigateByUrl('projects');
  }

  onResumeClick() {
    this.router.navigateByUrl('resume');
  }

}
