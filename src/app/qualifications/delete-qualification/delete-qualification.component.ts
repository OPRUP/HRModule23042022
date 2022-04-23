import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Qualification } from '../qualification';
import { QualificationService } from '../qualification.service';

@Component({
  selector: 'app-delete-qualification',
  templateUrl: './delete-qualification.component.html',
  styleUrls: ['./delete-qualification.component.css']
})
export class DeleteQualificationComponent implements OnInit {

  qualificationId!: number;
  qualification!: Qualification;
  qualifications!: Qualification[];


  constructor(private qualificationService: QualificationService, private router: Router, private activateRoute: ActivatedRoute){}

  ngOnInit() {
    this.getQualification();
  }

  public getQualification(){
    this.qualificationId = this.activateRoute.snapshot.params['id'];
    this.qualificationService.getQualificationById(this.qualificationId)
    .subscribe(data => {
      console.log(data)
      this.qualification = data;
    }, error => console.log(error));
  }


  public onDeleteQualification(qualification: Qualification){
    this.qualificationService.deleteQualification(qualification).subscribe( data => {
      console.log(data);
      this.goQualificationList();
    },
    (error: HttpErrorResponse) =>{
      alert(error.message);
    }
    );
  }

  public getAllQualifications(): void {
    this.qualificationService.getQualifications().subscribe(
      (response: Qualification[]) => {
        this.qualifications = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  goQualificationList(){
    this.router.navigate(['/qualifications/qualifications'])
  }


}
