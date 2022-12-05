import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PaginadorComponent } from './components/paginador/paginador.component';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { SelectPaginadorComponent } from './components/select-paginador/select-paginador.component';
import { InputComponent } from './components/input/input.component';
import { FiltroPipe } from './filtro.pipe';


@NgModule({
  declarations: [
    NavbarComponent,
    PaginadorComponent,
    SelectPaginadorComponent,
    InputComponent,
    FiltroPipe
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
    InputComponent,
    FiltroPipe
  ]
})
export class SharedModule { }
