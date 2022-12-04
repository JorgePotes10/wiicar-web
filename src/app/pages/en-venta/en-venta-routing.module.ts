import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnVentaComponent } from './en-venta.component';

const routes: Routes = [
  {
    path: '',
    component: EnVentaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnVentaRoutingModule { }
