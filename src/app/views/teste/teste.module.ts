import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TesteRoutingModule } from './teste-routing.module';
import { TesteComponent } from './teste.component';


@NgModule({
  declarations: [
    TesteComponent
  ],
  imports: [
    CommonModule,
    TesteRoutingModule
  ]
})
export class TesteModule { }
