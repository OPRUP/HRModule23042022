import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { JobTitle } from '../job-title';
import { JobTitleService } from '../job-title.service';

@Component({
  selector: 'app-delete-job-title',
  templateUrl: './delete-job-title.component.html',
  styleUrls: ['./delete-job-title.component.scss']
})
export class DeleteJobTitleComponent implements OnInit {

  jobId!: number;
  jobTitle;
  jobTitles!: JobTitle[];

  // jobTitleData = {
  //   jobId: '',
  //   jobTitleName: '',
  //   description:  '',
  //   deleteFlag: 1,
  //   centralJob:  {
  //   centralId:'',
  // },
  // };


  constructor(private jobTitleService: JobTitleService, private router: Router, private activateRoute: ActivatedRoute){}

  ngOnInit() {
    this.getJobTitle();
  }

  public getJobTitle(){
    this.jobId = this.activateRoute.snapshot.params['id'];
    this.jobTitleService.getJobtitleById(this.jobId)
    .subscribe(data => {
      console.log(data)
      this.jobTitle = data;
    }, error => console.log(error));
  }


  public onDeleteJobTitle(jobTitle: JobTitle){
    this.jobTitleService.deleteJobTitle(jobTitle).subscribe( data => {
      console.log(data);
      this.goJobTitleList();
    },
    (error) => {
      Swal.fire('Error!! ', 'Error while adding quiz', 'error')
      console.log(error);
    }
    );
  }

  goJobTitleList(){
    this.router.navigate(['/job-titles/job-titles'])
  }


}


