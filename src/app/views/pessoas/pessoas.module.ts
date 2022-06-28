import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PessoasRoutingModule } from './pessoas-routing.module';
import { PessoasReadComponent } from './pessoas-read/pessoas-read.component';
import { PessoasUpdateComponent } from './pessoas-update/pessoas-update.component';
import { PessoasCreateComponent } from './pessoas-create/pessoas-create.component';
import { PessoasDeleteComponent } from './pessoas-delete/pessoas-delete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { PipeDateTimeModule } from 'src/app/pipe/pipe-date-time/pipe-date-time.module';
import { PessoasDetailsComponent } from './pessoas-details/pessoas-details.component';


@NgModule({
  declarations: [
    PessoasReadComponent,
    PessoasUpdateComponent,
    PessoasCreateComponent,
    PessoasDeleteComponent,
    PessoasDetailsComponent
  ],
  imports: [
    CommonModule,
    PessoasRoutingModule,
    MatPaginatorModule,
    MatTableModule,
    MatInputModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
    PipeDateTimeModule,
    MatSelectModule
  ]
})
export class PessoasModule { }
