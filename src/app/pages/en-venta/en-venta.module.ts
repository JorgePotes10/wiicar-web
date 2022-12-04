import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnVentaRoutingModule } from './en-venta-routing.module';
import { EnVentaComponent } from './en-venta.component';


@NgModule({
  declarations: [
    EnVentaComponent
  ],
  imports: [
    CommonModule,
    EnVentaRoutingModule
  ]
})
export class EnVentaModule { }
