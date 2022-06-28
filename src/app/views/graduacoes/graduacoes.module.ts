import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraduacoesRoutingModule } from './graduacoes-routing.module';
import { GraduacoesReadComponent } from './graduacoes-read/graduacoes-read.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { GraduacoesCreateComponent } from './graduacoes-create/graduacoes-create.component';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GraduacoesUpdateComponent } from './graduacoes-update/graduacoes-update.component';
import { GraduacoesDeleteComponent } from './graduacoes-delete/graduacoes-delete.component';


@NgModule({
  declarations: [
    GraduacoesReadComponent,
    GraduacoesCreateComponent,
    GraduacoesUpdateComponent,
    GraduacoesDeleteComponent
  ],
  imports: [
    CommonModule,
    GraduacoesRoutingModule,
    MatPaginatorModule,
    MatTableModule,
    MatInputModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class GraduacoesModule { }
