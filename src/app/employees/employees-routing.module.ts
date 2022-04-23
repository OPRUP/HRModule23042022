import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeesComponent } from './employees/employees.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'employees',
        component: EmployeesComponent,
      },
      {
        path: 'create-employee',
        component: CreateEmployeeComponent,
      },
      {
        path: 'edit-employee/:id',
        component: EditEmployeeComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
