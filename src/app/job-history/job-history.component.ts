import { Component, OnInit } from '@angular/core';
import { Job} from "../classes";
import { JOBS} from "../portfolio";

@Component({
  selector: 'app-job-history',
  templateUrl: './job-history.component.html',
  styleUrls: ['./job-history.component.css']
})

export class JobHistoryComponent implements OnInit {
  
  jobs = JOBS;
  
  constructor() { }

  ngOnInit() {
  }

}
