import { Component, OnInit } from '@angular/core';
import { SimpleDataTable } from 'src/app/shared/data/tables_data/data_table';
import { DataTable } from 'simple-datatables';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {

  dataTable = SimpleDataTable;
  viewMode;
  constructor() { }


    ngOnInit() {
    this.viewMode = "tab01";
    console.log(this.viewMode);
  }

  ngAfterViewInit() {
    let dataTable1 = new DataTable("#myTable1", {
      searchable: true,
      fixedHeight: true,
    });

  }

}
