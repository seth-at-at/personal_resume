import { Component, OnInit } from '@angular/core';
import { Exp} from "../classes";
import { EXPERIENCE} from "../portfolio";
@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {
  experience = EXPERIENCE;

  constructor() { }

  ngOnInit() {
  }

}
