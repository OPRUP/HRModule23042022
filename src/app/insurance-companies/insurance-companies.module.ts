import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsuranceCompaniesRoutingModule } from './insurance-companies-routing.module';
import { CreateInsuranceCompanyComponent } from './create-insurance-company/create-insurance-company.component';
import { EditInsuranceCompanyComponent } from './edit-insurance-company/edit-insurance-company.component';
import { FormsModule } from '@angular/forms';
import { DeleteInsuranceCompanyComponent } from './delete-insurance-company/delete-insurance-company.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { InsuranceCompaniesComponent } from './insurance-companies/insurance-companies.component';


@NgModule({
  declarations: [

    InsuranceCompaniesComponent,
    CreateInsuranceCompanyComponent,
    EditInsuranceCompanyComponent,
    DeleteInsuranceCompanyComponent,

  ],
  imports: [
    CommonModule,
    InsuranceCompaniesRoutingModule,
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
export class InsuranceCompaniesModule { }
