import { EmpresaDeleteComponent } from './components/views/empresas/empresa-delete/empresa-delete.component';
import { EmpresaCreateComponent } from './components/views/empresas/empresa-create/empresa-create.component';
import { EmpresasReadComponent } from './components/views/empresas/empresas-read/empresas-read.component';
import { EmpresaUpdateComponent } from './components/views/empresas/empresa-update/empresa-update.component';
import { HomeComponent } from './components/views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path:'',
    component: HomeComponent
  },
  {
    path:'empresas',
    component: EmpresasReadComponent
  },
  {
    path:'empresas/create',
    component: EmpresaCreateComponent
  },
  {
    path:'empresas/update/:cod',
    component: EmpresaUpdateComponent
  },
  {
    path:'empresas/delete/:cod',
    component: EmpresaDeleteComponent
  },

  { path: 'graduacoes', loadChildren: () => import('./views/graduacoes/graduacoes.module').then(m => m.GraduacoesModule) },

  { path: 'passagens', loadChildren: () => import('./views/passagens/passagens.module').then(m => m.PassagensModule) },

  { path: 'cotas', loadChildren: () => import('./views/cotas/cotas.module').then(m => m.CotasModule) },

  { path: 'pessoas', loadChildren: () => import('./views/pessoas/pessoas.module').then(m => m.PessoasModule) },

  { path: 'teste', loadChildren: () => import('./views/teste/teste.module').then(m => m.TesteModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
