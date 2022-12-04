import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlmacenamientoComponent } from './almacenamiento.component';

const routes: Routes = [
  {
    path: '',
    component: AlmacenamientoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlmacenamientoRoutingModule { }
