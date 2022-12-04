import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PaginadorComponent } from './components/paginador/paginador.component';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { SelectPaginadorComponent } from './components/select-paginador/select-paginador.component';
import { InputComponent } from './components/input/input.component';


@NgModule({
  declarations: [
    NavbarComponent,
    PaginadorComponent,
    SelectPaginadorComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    NzPaginationModule
  ],
  exports: [
    NavbarComponent,
    PaginadorComponent,
    NzPaginationModule,
    SelectPaginadorComponent,
    InputComponent
  ]
})
export class SharedModule { }
