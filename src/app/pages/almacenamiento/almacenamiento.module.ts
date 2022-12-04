import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlmacenamientoRoutingModule } from './almacenamiento-routing.module';
import { AlmacenamientoComponent } from './almacenamiento.component';


@NgModule({
  declarations: [
    AlmacenamientoComponent
  ],
  imports: [
    CommonModule,
    AlmacenamientoRoutingModule
  ]
})
export class AlmacenamientoModule { }
