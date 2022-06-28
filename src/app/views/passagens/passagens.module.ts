import { PipeDateTimeModule } from './../../pipe/pipe-date-time/pipe-date-time.module';
import { NgModule, LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PassagensRoutingModule } from './passagens-routing.module';
import { PassagensReadComponent } from './passagens-read/passagens-read.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PassagensCreateComponent } from './passagens-create/passagens-create.component';
import { PassagensUpdateComponent } from './passagens-update/passagens-update.component';
import { PassagensDeleteComponent } from './passagens-delete/passagens-delete.component';


@NgModule({
  declarations: [
    PassagensReadComponent,
    PassagensCreateComponent,
    PassagensUpdateComponent,
    PassagensDeleteComponent
  ],
  imports: [
    CommonModule,
    PassagensRoutingModule,
    MatPaginatorModule,
    MatTableModule,
    MatInputModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
    PipeDateTimeModule
  ],
  providers: [
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
  ]
})
export class PassagensModule { }
