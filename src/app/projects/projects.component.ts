import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit() {
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
