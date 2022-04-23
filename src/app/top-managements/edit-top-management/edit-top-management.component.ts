import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TopManagement } from '../top-management';
import { TopManagementsService } from '../top-managements.service';

@Component({
  selector: 'app-edit-top-management',
  templateUrl: './edit-top-management.component.html',
  styleUrls: ['./edit-top-management.component.scss']
})
export class EditTopManagementComponent implements OnInit {

 //public qualification: Qualification[] = [];
 topManagementId!: number;
 topManagement!: TopManagement;
 topManagements!: TopManagement[];

 constructor(private topManagementsService: TopManagementsService, private router: Router, private activateRoute: ActivatedRoute){}

 ngOnInit() {
   this.getTopManagement();
 }

 goTopManagementList(){
   this.router.navigate(['/top-managements/top-managements'])
 }

 public getTopManagement(){
   this.topManagementId = this.activateRoute.snapshot.params['id'];
   this.topManagementsService.getTopManagementById(this.topManagementId)
   .subscribe(data => {
     console.log(data)
     this.topManagement = data;
   }, error => console.log(error));
 }

 public getAllTopManagements(): void {
   this.topManagementsService.getTopManagements().subscribe(
     (response: TopManagement[]) => {
       this.topManagements = response;
     },
     (error: HttpErrorResponse) => {
       alert(error.message);
     }
   );
 }

 public onUpdateTopManagement(topManagement: TopManagement): void {
   this.topManagementsService.updateTopManagement(topManagement).subscribe(
     (response: TopManagement) => {
       console.log(response);
       this.getAllTopManagements();
       this.goTopManagementList();
     },
     (error: HttpErrorResponse) => {
       alert(error.message);
     }
   );
 }

}
