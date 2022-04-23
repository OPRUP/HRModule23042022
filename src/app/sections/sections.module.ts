import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionsRoutingModule } from './sections-routing.module';
import { SectionsComponent } from './sections/sections.component';
import { CreateSectionComponent } from './create-section/create-section.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditSectionComponent } from './edit-section/edit-section.component';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
    SectionsComponent,
    CreateSectionComponent,
    EditSectionComponent
  ],
  imports: [
    CommonModule,
    SectionsRoutingModule,
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
export class SectionsModule { }
