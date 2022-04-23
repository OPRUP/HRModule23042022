import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BanksRoutingModule } from './banks-routing.module';
import { BanksComponent } from './banks/banks.component';
import { CreateBankComponent } from './create-bank/create-bank.component';
import { EditBankComponent } from './edit-bank/edit-bank.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatCardModule} from '@angular/material/card';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { DeleteBankComponent } from './delete-bank/delete-bank.component';


@NgModule({
  declarations: [
    BanksComponent,
    CreateBankComponent,
    EditBankComponent,
    DeleteBankComponent
  ],
  imports: [
    CommonModule,
    BanksRoutingModule,
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
export class BanksModule { }
