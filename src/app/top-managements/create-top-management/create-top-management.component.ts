import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TopManagement } from '../top-management';
import { TopManagementsService } from '../top-managements.service';

@Component({
  selector: 'app-create-top-management',
  templateUrl: './create-top-management.component.html',
  styleUrls: ['./create-top-management.component.scss']
})
export class CreateTopManagementComponent implements OnInit {

     // public majors: Major[] = [];
     topManagement!: TopManagement[];

  constructor(private topManagementsService: TopManagementsService, private router: Router){}

  ngOnInit() {
  }

  goTopManagementList(){
    this.router.navigate(['/top-managements/top-managements'])
  }

  public onAddTopManagement(addForm: NgForm): void {
    document.getElementById('add-top-management-form')?.click();
    this.topManagementsService.addTopManagement(addForm.value).subscribe(
      (response: TopManagement) => {
        console.log(response);
        this.topManagementsService.getTopManagements();
        this.goTopManagementList();

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
