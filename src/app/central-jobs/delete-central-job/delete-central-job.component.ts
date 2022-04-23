import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CentralJob } from '../central-job';
import { CentralJobService } from '../central-job.service';

@Component({
  selector: 'app-delete-central-job',
  templateUrl: './delete-central-job.component.html',
  styleUrls: ['./delete-central-job.component.scss']
})
export class DeleteCentralJobComponent implements OnInit {

  centralJobId!: number;
  centralJob!: CentralJob;
  centralJobs!: CentralJob[];


  constructor(private centralJobService: CentralJobService, private router: Router, private activateRoute: ActivatedRoute){}

  ngOnInit() {
    this.getCentralJob();
  }

  public getCentralJob(){
    this.centralJobId = this.activateRoute.snapshot.params['id'];
    this.centralJobService.getCentralJobById(this.centralJobId)
    .subscribe(data => {
      console.log(data)
      this.centralJob = data;
    }, error => console.log(error));
  }


  public onDeleteCentralJob(centralJob: CentralJob){
    this.centralJobService.deleteCentralJob(centralJob).subscribe( data => {
      console.log(data);
      this.goCentralJobList();
    },
    (error: HttpErrorResponse) =>{
      alert(error.message);
    }
    );
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


  goCentralJobList(){
    this.router.navigate(['/central-jobs/central-jobs'])
  }


}
