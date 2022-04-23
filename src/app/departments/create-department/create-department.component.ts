import { Component, OnInit } from '@angular/core';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { Moment } from 'moment'
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { DualListComponent } from 'angular-dual-listbox';
import { Department } from '../department';
import { DepartmentsService } from '../departments.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.scss']
})
export class CreateDepartmentComponent implements OnInit {
  public departments: Department[] = [];

  constructor(private departmentService: DepartmentsService, private router: Router){}

  ngOnInit() {
  }

  goDepartmentsList(){
    this.router.navigate(['/departments/departments'])
  }

  public onAddDepartment(addForm: NgForm): void {
    document.getElementById('add-department-form')?.click();
    this.departmentService.addDepartment(addForm.value).subscribe(
      (response: Department) => {
        console.log(response);
        this.departmentService.getDepartments();
        this.goDepartmentsList();

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
