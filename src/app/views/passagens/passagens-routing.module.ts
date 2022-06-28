import { PassagensDeleteComponent } from './passagens-delete/passagens-delete.component';
import { PassagensUpdateComponent } from './passagens-update/passagens-update.component';
import { PassagensCreateComponent } from './passagens-create/passagens-create.component';
import { PassagensReadComponent } from './passagens-read/passagens-read.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',
   component: PassagensReadComponent
  },
  {
    path: 'create',
    component: PassagensCreateComponent
  },
  {
    path: 'update/:cod',
    component: PassagensUpdateComponent
  },
  {
    path: 'delete/:cod',
    component: PassagensDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PassagensRoutingModule { }
