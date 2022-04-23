import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CentralJobsRoutingModule } from './central-jobs-routing.module';
import { CentralJobsComponent } from './central-jobs/central-jobs.component';
import { CreateCentralJobComponent } from './create-central-job/create-central-job.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { EditCentralJobComponent } from './edit-central-job/edit-central-job.component';
import { FormsModule } from '@angular/forms';
import { DeleteCentralJobComponent } from './delete-central-job/delete-central-job.component';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    CentralJobsComponent,
    CreateCentralJobComponent,
    EditCentralJobComponent,
    DeleteCentralJobComponent,
  ],
  imports: [
    CommonModule,
    CentralJobsRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatFormFieldModule,

  ]
})
export class CentralJobsModule { }
