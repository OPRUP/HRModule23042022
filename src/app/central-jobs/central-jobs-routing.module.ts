import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CentralJobsComponent } from './central-jobs/central-jobs.component';
import { CreateCentralJobComponent } from './create-central-job/create-central-job.component';
import { DeleteCentralJobComponent } from './delete-central-job/delete-central-job.component';
import { EditCentralJobComponent } from './edit-central-job/edit-central-job.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'central-jobs',
        component: CentralJobsComponent,
      },
      {
        path: 'create-central-job',
        component: CreateCentralJobComponent,
      },
      {
        path: 'edit-central-job/:id',
        component: EditCentralJobComponent,
      },
      {
        path: 'delete-central-job/:id',
        component: DeleteCentralJobComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CentralJobsRoutingModule { }
