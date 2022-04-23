import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from '../department';
import { DepartmentsService } from '../departments.service';

@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrls: ['./edit-department.component.scss']
})
export class EditDepartmentComponent implements OnInit {
  public department: Department[] = [];
  id!: number;
  dept!: Department;
  departments!: Department[];

  constructor(private departmentService: DepartmentsService, private router: Router, private activateRoute: ActivatedRoute){}

  ngOnInit() {
    this.getDepartment();
  }

  goDepartmentsList(){
    this.router.navigate(['/departments/departments'])
  }

  public getDepartment(){
    this.id = this.activateRoute.snapshot.params['id'];
    this.departmentService.getDepartmentById(this.id)
    .subscribe(data => {
      console.log(data)
      this.dept = data;
    }, error => console.log(error));
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

  public onUpdateDepartment(department: Department): void {
    this.departmentService.updateDepartment(department).subscribe(
      (response: Department) => {
        console.log(response);
        this.getAllDepartments();
        this.goDepartmentsList();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


}
