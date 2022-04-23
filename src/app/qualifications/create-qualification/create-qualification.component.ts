import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Qualification } from '../qualification';
import { QualificationService } from '../qualification.service';

@Component({
  selector: 'app-create-qualification',
  templateUrl: './create-qualification.component.html',
  styleUrls: ['./create-qualification.component.scss']
})
export class CreateQualificationComponent implements OnInit {


  public qualifications: Qualification[] = [];
  //qualifications!: Qualification[];

  constructor(private qualificationService: QualificationService, private router: Router){}

  ngOnInit() {
  }

  goQualificationList(){
    this.router.navigate(['/qualifications/qualifications'])
  }

  public onAddQualification(addForm: NgForm): void {
    document.getElementById('add-qualification-form')?.click();
    this.qualificationService.addQualification(addForm.value).subscribe(
      (response: Qualification) => {
        console.log(response);
        this.qualificationService.getQualifications();
        this.goQualificationList();

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
