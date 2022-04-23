import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateSectionComponent } from './create-section/create-section.component';
import { EditSectionComponent } from './edit-section/edit-section.component';
import { SectionsComponent } from './sections/sections.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'sections',
        component: SectionsComponent,
      },
      {
        path: 'create-section',
        component: CreateSectionComponent,
      },
      {
        path: 'edit-section/:id',
        component: EditSectionComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectionsRoutingModule { }
