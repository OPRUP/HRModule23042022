import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentsRoutingModule } from './departments-routing.module';
import { DepartmentsComponent } from './departments/departments.component';
import { CreateDepartmentComponent } from './create-department/create-department.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditDepartmentComponent } from './edit-department/edit-department.component';
import { FormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
    DepartmentsComponent,
    CreateDepartmentComponent,
    EditDepartmentComponent,

  ],
  imports: [
    CommonModule,
    DepartmentsRoutingModule,
    NgbModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatListModule,
    NgSelectModule
  ]
})
export class DepartmentsModule { }
