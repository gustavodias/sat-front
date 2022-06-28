import { PipeDateTimeModule } from './../../pipe/pipe-date-time/pipe-date-time.module';
import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CotasRoutingModule } from './cotas-routing.module';
import { CotasReadComponent } from './cotas-read/cotas-read.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatSelectModule} from '@angular/material/select';
import { CotasCreateComponent } from './cotas-create/cotas-create.component';
import { CotasUpdateComponent } from './cotas-update/cotas-update.component';
import { CotasDeleteComponent } from './cotas-delete/cotas-delete.component';





@NgModule({
  declarations: [   
    CotasReadComponent, CotasCreateComponent, CotasUpdateComponent, CotasDeleteComponent
  ],
  imports: [
    CommonModule,
    CotasRoutingModule,
    MatPaginatorModule,
    MatTableModule,
    MatInputModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
    PipeDateTimeModule,
    MatSelectModule
  ],
  providers: [
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' }
  ]
})
export class CotasModule { }
