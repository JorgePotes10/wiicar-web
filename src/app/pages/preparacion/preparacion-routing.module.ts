import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreparacionComponent } from './preparacion.component';

const routes: Routes = [
  {
    path: '',
    component: PreparacionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreparacionRoutingModule { }
