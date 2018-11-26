import { Component, OnInit } from '@angular/core';
import { Project } from "../classes";
import { PROJECTS } from "../portfolio";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects = PROJECTS;
  constructor() { }

  ngOnInit() {
  }

}
