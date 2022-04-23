import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Qualification } from '../qualification';
import { QualificationService } from '../qualification.service';

@Component({
  selector: 'app-edit-qualification',
  templateUrl: './edit-qualification.component.html',
  styleUrls: ['./edit-qualification.component.scss']
})
export class EditQualificationComponent implements OnInit {

  //public qualification: Qualification[] = [];
  qualificationId!: number;
  qualification!: Qualification;
  qualifications!: Qualification[];

  constructor(private qualificationService: QualificationService, private router: Router, private activateRoute: ActivatedRoute){}

  ngOnInit() {
    this.getQualification();
  }

  goQualificationList(){
    this.router.navigate(['/qualifications/qualifications'])
  }

  public getQualification(){
    this.qualificationId = this.activateRoute.snapshot.params['id'];
    this.qualificationService.getQualificationById(this.qualificationId)
    .subscribe(data => {
      console.log(data)
      this.qualification = data;
    }, error => console.log(error));
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

  public onUpdateQualification(qualification: Qualification): void {
    this.qualificationService.updateQualification(qualification).subscribe(
      (response: Qualification) => {
        console.log(response);
        this.getAllQualifications();
        this.goQualificationList();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


}
