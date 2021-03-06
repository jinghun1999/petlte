import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StockComponent} from './stock.component';
import {StockRoutingModule} from './stock-routing.module';
import {PaginationModule} from 'ngx-bootstrap';
import {FormsModule} from '@angular/forms';
import {ModalModule} from 'ngx-bootstrap';
import {ReportBranchNavModule} from '../../../shared/modules';

@NgModule({
  imports: [
    CommonModule,
    PaginationModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule,
    ReportBranchNavModule,
    StockRoutingModule
  ],
  declarations: [StockComponent]
})
export class StockModule {
}
