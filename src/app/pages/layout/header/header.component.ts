import { Component, OnInit } from '@angular/core';
import { faBars, faPowerOff, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  icon: any = 
    {
      nav: faBars, close:faXmark, off:faPowerOff
    }
  

  constructor() { }

  ngOnInit(): void {
  }

}
