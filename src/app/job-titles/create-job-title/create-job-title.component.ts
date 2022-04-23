import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CentralJob } from 'src/app/central-jobs/central-job';
import { CentralJobService } from 'src/app/central-jobs/central-job.service';
import Swal from 'sweetalert2';
import { JobTitle } from '../job-title';
import { JobTitleService } from '../job-title.service';


@Component({
  selector: 'app-create-job-title',
  templateUrl: './create-job-title.component.html',
  styleUrls: ['./create-job-title.component.scss']
})
export class CreateJobTitleComponent implements OnInit {

  jobTitleData = {
    jobTitleName: '',
    description:  '',
    deleteFlag: 1,
    centralJob:  {
    centralId:'',
  },
  };

  // public majors: Major[] = [];
  jobTitle!: JobTitle[];
  centralJobs!: CentralJob[];


  constructor(private jobTitleService : JobTitleService,private centralJobService: CentralJobService, private router: Router){}

  ngOnInit() {
    this.getCentralJobs();
  }

  goJobtitleList(){
    this.router.navigate(['/job-titles/job-titles'])
  }

  public onAddJobtitle(): void {
    document.getElementById('add-job-title-form')?.click();
    this.jobTitleService.addJobTitle(this.jobTitleData).subscribe(
      (response: JobTitle) => {
        Swal.fire('Success', 'Job Title is added', 'success')
        this. jobTitleData = {
          jobTitleName: '',
          description:  '',
          deleteFlag: 1,
          centralJob:  {
            centralId:'',
        },

        };
        this.jobTitleService.getJobTitles();
        this.goJobtitleList();

      },
      (error) => {
        Swal.fire('Error!! ', 'Error while adding quiz', 'error')
        console.log(error);
      }
    );
  }

  public getCentralJobs(): void{
    this.centralJobService.getCentralJobs().subscribe((response:CentralJob[]) => {
      this.centralJobs = response;
      console.log(this.centralJobs);
    },
    (error: HttpErrorResponse) => {
          alert(error.message);
          //Swal.fire(error.message);
        }
    )
  }


}
