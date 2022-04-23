import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from '../department';
import { DepartmentsService } from '../departments.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {
  public departments: Department[] = [];

  constructor(private departmentService: DepartmentsService, private router: Router){}


  ngOnInit(): void {
    this.getAllDepartments();
  }

  public getAllDepartments(): void {
    this.departmentService.getDepartments().subscribe(
      (response: Department[]) => {
        this.departments = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public editDepartmentById(id: number): void {
    this.router.navigate(['/top-managements/edit-top-management',id])
  }


  public onDeleteDepartment(departmentId: number){
    this.departmentService.deleteDepartment(departmentId).subscribe( data => {
      console.log(data);
      this.getAllDepartments();
    },
    (error: HttpErrorResponse) =>{
      alert(error.message);
    }
    );
  }

}
