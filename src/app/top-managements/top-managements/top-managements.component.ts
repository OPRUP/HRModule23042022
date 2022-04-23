import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TopManagement } from '../top-management';
import { TopManagementsService } from '../top-managements.service';

@Component({
  selector: 'app-top-managements',
  templateUrl: './top-managements.component.html',
  styleUrls: ['./top-managements.component.scss']
})
export class TopManagementsComponent implements OnInit {
  displayedColumns: string[] = [
    // 'topManagementId',
    'topManagementName',
    'description',
    // 'deleteFlag',
    'actions',
  ];
  topManagements!: MatTableDataSource<TopManagement>;


  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  constructor(private topManagementsService: TopManagementsService, private router: Router){}


  ngOnInit(): void {
    this.getAllTopManagements();
   // this.getCurrentBanks();
  }



  public getAllTopManagements(): void {

    this.topManagementsService.getTopManagements().subscribe((response:TopManagement[]) => {
      this.topManagements = new MatTableDataSource(response);
      this.topManagements.paginator =this.paginator;
      this.topManagements.sort = this.matSort;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
      );
      // let resp = this.bankService.getBanks();
      // resp.subscribe(report => this.dataSource.data=report as Bank[]);

    //   (response: Bank[]) => {
    //     this.banks = response;

    //   },
    //   (error: HttpErrorResponse) => {
    //     alert(error.message);
    //   }
    // );


  }


  ngAfterViewInit() {}



  public onEditTopManagementById(topManagementId: number): void {
    this.router.navigate(['/top-managements/edit-top-management', topManagementId])
  }


  public onEditToDeleteTopManagementById(topManagementId: number):void{
    this.router.navigate(['/top-managements/delete-top-management', topManagementId])
  }



  filterData($event: any){
    this.topManagements.filter = $event.target.value;
  }

}
