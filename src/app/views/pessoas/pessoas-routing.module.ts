import { PessoasDetailsComponent } from './pessoas-details/pessoas-details.component';
import { PessoasCreateComponent } from './pessoas-create/pessoas-create.component';
import { PessoasReadComponent } from './pessoas-read/pessoas-read.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoasUpdateComponent } from './pessoas-update/pessoas-update.component';
import { PessoasDeleteComponent } from './pessoas-delete/pessoas-delete.component';

const routes: Routes = [
  { 
  path: '', component: PessoasReadComponent 
  },
  {
    path: 'create',
    component: PessoasCreateComponent
  },
  {
    path: 'update/:cod',
    component: PessoasUpdateComponent
  },
  {
    path: 'delete/:cod',
    component: PessoasDeleteComponent
  },
  {
    path: 'details/:cod',
    component: PessoasDetailsComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoasRoutingModule { }
