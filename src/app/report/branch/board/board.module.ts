import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BoardComponent} from './board.component';
import {BoardRoutingModule} from './board-routing.module';
import {NgxEchartsModule} from 'ngx-echarts';

@NgModule({
  imports: [
    CommonModule,
    BoardRoutingModule,
    NgxEchartsModule
  ],
  declarations: [BoardComponent]
})
export class BoardModule {
}
