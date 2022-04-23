import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CentralJob } from '../central-job';
import { CentralJobService } from '../central-job.service';

@Component({
  selector: 'app-edit-central-job',
  templateUrl: './edit-central-job.component.html',
  styleUrls: ['./edit-central-job.component.scss']
})
export class EditCentralJobComponent implements OnInit {

  //public centralJobs: CentralJob[] = [];
  centralId!: number;
  centralJob!: CentralJob;
  centralJobs!: CentralJob[];

  constructor(private centralJobService: CentralJobService, private router: Router, private activateRoute: ActivatedRoute){}

  ngOnInit() {
    this.getCentralJob();
  }

  goCentralJobList(){
    this.router.navigate(['/central-jobs/central-jobs'])
  }

  public getCentralJob(){
    this.centralId = this.activateRoute.snapshot.params['id'];
    this.centralJobService.getCentralJobById(this.centralId)
    .subscribe(data => {
      console.log(data)
      this.centralJob = data;
    }, error => console.log(error));
  }

  public getAllCentralJobs(): void {
    this.centralJobService.getCentralJobs().subscribe(
      (response: CentralJob[]) => {
        this.centralJobs = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onUpdateCentralJob(centralJob: CentralJob): void {
    this.centralJobService.updateCentralJob(centralJob).subscribe(
      (response: CentralJob) => {
        console.log(response);
        // this.topManagementService.getTopManagements();
        this.getAllCentralJobs();
        this.goCentralJobList();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


}
