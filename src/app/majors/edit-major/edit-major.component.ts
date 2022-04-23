import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Major } from '../major';
import { MajorService } from '../major.service';

@Component({
  selector: 'app-edit-major',
  templateUrl: './edit-major.component.html',
  styleUrls: ['./edit-major.component.scss']
})
export class EditMajorComponent implements OnInit {

  //public qualification: Qualification[] = [];
  majorId!: number;
  major!: Major;
  majors!: Major[];

  constructor(private majorService: MajorService, private router: Router, private activateRoute: ActivatedRoute){}

  ngOnInit() {
    this.getMajor();
  }

  goMajorList(){
    this.router.navigate(['/majors/majors'])
  }

  public getMajor(){
    this.majorId = this.activateRoute.snapshot.params['id'];
    this.majorService.getMajorById(this.majorId)
    .subscribe(data => {
      console.log(data)
      this.major = data;
    }, error => console.log(error));
  }

  public getAllMajors(): void {
    this.majorService.getMajors().subscribe(
      (response: Major[]) => {
        this.majors = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onUpdateMajor(major: Major): void {
    this.majorService.updateMajor(major).subscribe(
      (response: Major) => {
        console.log(response);
        this.getAllMajors();
        this.goMajorList();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
