import { Component, OnInit } from '@angular/core';
import { faCar, faCarOn, faMoneyBillTransfer, faTags } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
 
  menu = [
    {
      name:'Preparacion',
      icon:faCar,
      activo:true
    },
    {
      name:'Almacenamiento',
      icon: faCarOn,
      activo:false
    },
    {
      name:'En venta',
      icon: faTags,
      activo:false
    },
    {
      name:'Vendidos',
      icon: faMoneyBillTransfer,
      activo:false
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
