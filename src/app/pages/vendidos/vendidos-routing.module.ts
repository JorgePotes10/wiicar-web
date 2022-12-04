import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VendidosComponent } from './vendidos.component';

const routes: Routes = [
  {
    path: '',
    component: VendidosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendidosRoutingModule { }
