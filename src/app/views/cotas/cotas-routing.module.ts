import { CotasDeleteComponent } from './cotas-delete/cotas-delete.component';
import { CotasUpdateComponent } from './cotas-update/cotas-update.component';
import { CotasCreateComponent } from './cotas-create/cotas-create.component';
import { CotasReadComponent } from './cotas-read/cotas-read.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
  path: '', component: CotasReadComponent 
  },
  {
    path: 'create',
    component: CotasCreateComponent
  },
  {
    path: 'update/:cod',
    component: CotasUpdateComponent
  },
  {
    path: 'delete/:cod',
    component: CotasDeleteComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CotasRoutingModule { }
