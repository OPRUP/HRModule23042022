import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { QualificationService } from 'src/app/qualifications/qualification.service';
import { Major } from '../major';
import { MajorService } from '../major.service';

@Component({
  selector: 'app-create-major',
  templateUrl: './create-major.component.html',
  styleUrls: ['./create-major.component.scss']
})
export class CreateMajorComponent implements OnInit {

  // public majors: Major[] = [];
  majors!: Major[];

  constructor(private majorService: MajorService, private router: Router){}

  ngOnInit() {
  }

  goMajorList(){
    this.router.navigate(['/majors/majors'])
  }

  public onAddMajor(addForm: NgForm): void {
    document.getElementById('add-major-form')?.click();
    this.majorService.addMajor(addForm.value).subscribe(
      (response: Major) => {
        console.log(response);
        this.majorService.getMajors();
        this.goMajorList();

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
