import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDepartmentComponent } from './create-department/create-department.component';
import { DepartmentsComponent } from './departments/departments.component';
import { EditDepartmentComponent } from './edit-department/edit-department.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'departments',
        component: DepartmentsComponent,
      },
      {
        path: 'create-department',
        component: CreateDepartmentComponent,
      },
      {
        path: 'edit-department/:id',
        component: EditDepartmentComponent,
      },
    ]
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentsRoutingModule { }
