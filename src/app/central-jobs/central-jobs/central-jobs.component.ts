import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DataTable } from 'simple-datatables';
import { SimpleDataTable } from 'src/app/shared/data/tables_data/data_table';
import Swal from 'sweetalert2';
import { CentralJob } from '../central-job';
import { CentralJobService } from '../central-job.service';
@Component({
  selector: 'app-central-jobs',
  templateUrl: './central-jobs.component.html',
  styleUrls: ['./central-jobs.component.scss']
})
export class CentralJobsComponent implements OnInit {
  displayedColumns: string[] = [
    // 'centralId',
    'centralJobName',
    'description',
    // 'deleteFlag',
    'actions',
  ];
  centralJobs!: MatTableDataSource<CentralJob>;

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  constructor(private centralJobService: CentralJobService, private router: Router){}


  ngOnInit(): void {
    this.getAllCentralJobs();
  }



  public getAllCentralJobs(): void {

    this.centralJobService.getCentralJobs().subscribe((response:CentralJob[]) => {
      this.centralJobs = new MatTableDataSource(response);
      this.centralJobs.paginator =this.paginator;
      this.centralJobs.sort = this.matSort;
      },
      (error)  =>
      {
        console.log(error);
        Swal.fire('Error !', 'Error in loading data !', 'error');

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



  public onEditCentralJobById(centralId: number): void {
    this.router.navigate(['/central-jobs/edit-central-job', centralId])
  }


  public onEditToDeleteCentralJobById(centralId: number):void{
    this.router.navigate(['/central-jobs/delete-central-job', centralId])
  }

  filterData($event: any){
    this.centralJobs.filter = $event.target.value;
  }

}

