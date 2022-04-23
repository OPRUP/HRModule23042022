import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Major } from '../major';
import { MajorService } from '../major.service';


@Component({
  selector: 'app-majors',
  templateUrl: './majors.component.html',
  styleUrls: ['./majors.component.scss']
})
export class MajorsComponent implements OnInit {

  displayedColumns: string[] = [
    // 'majordId',
    'majorName',
    'description',
    // 'deleteFlag',
    'actions',
  ];
  majors!: MatTableDataSource<Major>;


  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  constructor(private majorService: MajorService, private router: Router){}


  ngOnInit(): void {
    this.getAllMajors();
   // this.getCurrentBanks();
  }



  public getAllMajors(): void {

    this.majorService.getMajors().subscribe((response:Major[]) => {
      this.majors = new MatTableDataSource(response);
      this.majors.paginator =this.paginator;
      this.majors.sort = this.matSort;
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



  public onEditMajorById(majorId: number): void {
    this.router.navigate(['/majors/edit-major', majorId])
  }


  public onEditToDeleteMajorById(majorId: number):void{
    this.router.navigate(['/majors/delete-major', majorId])
  }



  filterData($event: any){
    this.majors.filter = $event.target.value;
  }

}
