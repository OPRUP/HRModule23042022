import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateMajorComponent } from './create-major/create-major.component';
import { DeleteMajorComponent } from './delete-major/delete-major.component';
import { EditMajorComponent } from './edit-major/edit-major.component';
import { MajorsComponent } from './majors/majors.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'majors',
        component: MajorsComponent,
      },
      {
        path: 'create-major',
        component: CreateMajorComponent,
      },
      {
        path: 'edit-major/:id',
        component: EditMajorComponent,
      },
      {
        path: 'delete-major/:id',
        component: DeleteMajorComponent,
      },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MajorsRoutingModule { }
