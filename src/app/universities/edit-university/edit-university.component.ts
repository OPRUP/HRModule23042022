import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { University } from '../university';
import { UniversityService } from '../university.service';

@Component({
  selector: 'app-edit-university',
  templateUrl: './edit-university.component.html',
  styleUrls: ['./edit-university.component.scss']
})
export class EditUniversityComponent implements OnInit {

 //public qualification: Qualification[] = [];
 universityId!: number;
 university!: University;
 universities!: University[];

 constructor(private universityService: UniversityService, private router: Router, private activateRoute: ActivatedRoute){}

 ngOnInit() {
   this.getUniversity();
 }

 goUniversityList(){
   this.router.navigate(['/universities/universities'])
 }

 public getUniversity(){
   this.universityId = this.activateRoute.snapshot.params['id'];
   this.universityService.getUniversityById(this.universityId)
   .subscribe(data => {
     console.log(data)
     this.university = data;
   }, error => console.log(error));
 }

 public getAllUniversities(): void {
   this.universityService.getUniversities().subscribe(
     (response: University[]) => {
       this.universities = response;
     },
     (error: HttpErrorResponse) => {
       alert(error.message);
     }
   );
 }

 public onUpdateUniversity(university: University): void {
   this.universityService.updateUniversity(university).subscribe(
     (response: University) => {
       console.log(response);
       this.getAllUniversities();
       this.goUniversityList();
     },
     (error: HttpErrorResponse) => {
       alert(error.message);
     }
   );
 }


}
