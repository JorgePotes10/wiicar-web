import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendidosRoutingModule } from './vendidos-routing.module';
import { VendidosComponent } from './vendidos.component';


@NgModule({
  declarations: [
    VendidosComponent
  ],
  imports: [
    CommonModule,
    VendidosRoutingModule
  ]
})
export class VendidosModule { }
