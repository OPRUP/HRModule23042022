import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CentralJob } from '../central-job';
import { CentralJobService } from '../central-job.service';

@Component({
  selector: 'app-create-central-job',
  templateUrl: './create-central-job.component.html',
  styleUrls: ['./create-central-job.component.scss']
})
export class CreateCentralJobComponent implements OnInit {


  // public majors: Major[] = [];
  centralJobs!: CentralJob[];

  constructor(private centralJobService: CentralJobService, private router: Router){}

  ngOnInit() {
  }

  goCentralJobList(){
    this.router.navigate(['/central-jobs/central-jobs'])
  }

  public onAddCentralJob(addForm: NgForm): void {
    document.getElementById('add-central-job-form')?.click();
    this.centralJobService.addCentralJob(addForm.value).subscribe(
      (response: CentralJob) => {
        console.log(response);
        this.centralJobService.getCentralJobs();
        this.goCentralJobList();

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
