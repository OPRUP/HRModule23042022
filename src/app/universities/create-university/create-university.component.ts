import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { University } from '../university';
import { UniversityService } from '../university.service';

@Component({
  selector: 'app-create-university',
  templateUrl: './create-university.component.html',
  styleUrls: ['./create-university.component.scss']
})
export class CreateUniversityComponent implements OnInit {

   // public majors: Major[] = [];
   universities!: University[];

   constructor(private universityService: UniversityService, private router: Router){}

   ngOnInit() {
   }

   goUniversityList(){
     this.router.navigate(['/universities/universities'])
   }

   public onAddUniversity(addForm: NgForm): void {
     document.getElementById('add-university-form')?.click();
     this.universityService.addUniversity(addForm.value).subscribe(
       (response: University) => {
         console.log(response);
         this.universityService.getUniversities();
         this.goUniversityList();

       },
       (error: HttpErrorResponse) => {
         alert(error.message);
       }
     );
   }

}
