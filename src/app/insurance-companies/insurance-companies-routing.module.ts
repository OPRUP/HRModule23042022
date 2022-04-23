import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateInsuranceCompanyComponent } from './create-insurance-company/create-insurance-company.component';
import { DeleteInsuranceCompanyComponent } from './delete-insurance-company/delete-insurance-company.component';
import { EditInsuranceCompanyComponent } from './edit-insurance-company/edit-insurance-company.component';
import { InsuranceCompaniesComponent } from './insurance-companies/insurance-companies.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'insurance-companies',
        component: InsuranceCompaniesComponent,
      },
      {
        path: 'create-insurance-company',
        component: CreateInsuranceCompanyComponent,
      },
      {
        path: 'edit-insurance-company/:id',
        component: EditInsuranceCompanyComponent,
      },
      {
        path: 'delete-insurance-company/:id',
        component: DeleteInsuranceCompanyComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InsuranceCompaniesRoutingModule { }
