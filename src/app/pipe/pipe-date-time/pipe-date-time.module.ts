import { LocalDateTimePipe } from 'src/app/pipe/local-date-time.pipe';
import { NgModule, PipeTransform } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as moment from 'moment';



@NgModule({
  declarations: [LocalDateTimePipe],
  imports: [
    CommonModule
  ],
  exports: [LocalDateTimePipe]
})
export class PipeDateTimeModule{
}
