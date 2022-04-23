import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { University } from '../university';
import { UniversityService } from '../university.service';

@Component({
  selector: 'app-delete-university',
  templateUrl: './delete-university.component.html',
  styleUrls: ['./delete-university.component.css']
})
export class DeleteUniversityComponent implements OnInit {

  universityId!: number;
  university!: University;
  universities!: University[];


  constructor(private universityService: UniversityService, private router: Router, private activateRoute: ActivatedRoute){}

  ngOnInit() {
    this.getUniversity();
  }

  public getUniversity(){
    this.universityId = this.activateRoute.snapshot.params['id'];
    this.universityService.getUniversityById(this.universityId)
    .subscribe(data => {
      console.log(data)
      this.university = data;
    }, error => console.log(error));
  }


  public onDeleteUniversity(university: University){
    this.universityService.deleteUniversity(university).subscribe( data => {
      console.log(data);
      this.goUniversityList();
    },
    (error: HttpErrorResponse) =>{
      alert(error.message);
    }
    );
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


  goUniversityList(){
    this.router.navigate(['/universities/universities'])
  }


}
