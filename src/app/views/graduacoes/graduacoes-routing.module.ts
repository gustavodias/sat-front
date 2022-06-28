import { GraduacoesDeleteComponent } from './graduacoes-delete/graduacoes-delete.component';
import { GraduacoesUpdateComponent } from './graduacoes-update/graduacoes-update.component';
import { GraduacoesCreateComponent } from './graduacoes-create/graduacoes-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraduacoesReadComponent } from './graduacoes-read/graduacoes-read.component';

const routes: Routes = [
  { path: '',
   component: GraduacoesReadComponent 
  },
  {
    path: 'create',
    component: GraduacoesCreateComponent
  },
  {
    path: 'update/:cod',
    component: GraduacoesUpdateComponent
  },
  {
    path: 'delete/:cod',
    component: GraduacoesDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraduacoesRoutingModule { }
