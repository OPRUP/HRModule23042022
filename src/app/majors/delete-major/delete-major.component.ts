import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Major } from '../major';
import { MajorService } from '../major.service';

@Component({
  selector: 'app-delete-major',
  templateUrl: './delete-major.component.html',
  styleUrls: ['./delete-major.component.scss']
})
export class DeleteMajorComponent implements OnInit {

  majorId!: number;
  major!: Major;
  majors!: Major[];



  constructor(private majorService: MajorService, private router: Router, private activateRoute: ActivatedRoute){}

  ngOnInit() {
    this.getMajor();
  }

  public getMajor(){
    this.majorId = this.activateRoute.snapshot.params['id'];
    this.majorService.getMajorById(this.majorId)
    .subscribe(data => {
      console.log(data)
      this.major = data;
    }, error => console.log(error));
  }


  public onDeleteMajor(major: Major){
    this.majorService.deleteMajor(major).subscribe( data => {
      console.log(data);
      this.goMajorList();
    },
    (error: HttpErrorResponse) =>{
      alert(error.message);
    }
    );
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


  goMajorList(){
    this.router.navigate(['/majors/majors'])
  }


}
