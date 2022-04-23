import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TopManagement } from '../top-management';
import { TopManagementsService } from '../top-managements.service';

@Component({
  selector: 'app-delete-top-management',
  templateUrl: './delete-top-management.component.html',
  styleUrls: ['./delete-top-management.component.scss']
})
export class DeleteTopManagementComponent implements OnInit {

  topManagementId!: number;
  topManagement!: TopManagement;
  topManagements!: TopManagement[];



  constructor(private topManagementsService: TopManagementsService, private router: Router, private activateRoute: ActivatedRoute){}

  ngOnInit() {
    this.getTopManagement();
  }

  public getTopManagement(){
    this.topManagementId = this.activateRoute.snapshot.params['id'];
    this.topManagementsService.getTopManagementById(this.topManagementId)
    .subscribe(data => {
      console.log(data)
      this.topManagement = data;
    }, error => console.log(error));
  }


  public onDeleteTopManagement(topManagement: TopManagement){
    this.topManagementsService.deleteTopManagement(topManagement).subscribe( data => {
      console.log(data);
      this.goTopManagementList();
    },
    (error: HttpErrorResponse) =>{
      alert(error.message);
    }
    );
  }

  public getAllMajors(): void {
    this.topManagementsService.getTopManagements().subscribe(
      (response: TopManagement[]) => {
        this.topManagements = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  goTopManagementList(){
    this.router.navigate(['/top-managements/top-managements'])
  }


}
