import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children:[
      {
        path:'preparacion',
        loadChildren: ()=>import('./pages/preparacion/preparacion.module').then((m)=>m.PreparacionModule)
      },
      {
        path:'almacenamiento',
        loadChildren: ()=>import('./pages/almacenamiento/almacenamiento.module').then((m)=>m.AlmacenamientoModule)
      },
      {
        path:'en-venta',
        loadChildren: ()=>import('./pages/en-venta/en-venta.module').then((m)=>m.EnVentaModule)
      },
      {
        path:'vendidos',
        loadChildren: ()=>import('./pages/vendidos/vendidos.module').then((m)=>m.VendidosModule)
      },
      {
        path: '',
        redirectTo: 'preparacion',
        pathMatch: 'full'
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
