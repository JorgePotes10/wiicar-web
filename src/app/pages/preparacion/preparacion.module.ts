import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreparacionRoutingModule } from './preparacion-routing.module';
import { PreparacionComponent } from './preparacion.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    PreparacionComponent
  ],
  imports: [
    CommonModule,
    PreparacionRoutingModule,
    NzTableModule,
    NzSelectModule,
    FontAwesomeModule,
    NzIconModule,
    NzDropDownModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PreparacionModule { }
