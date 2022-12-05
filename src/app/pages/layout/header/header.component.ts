import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faBars, faPowerOff, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() getCollapse = new EventEmitter<any>();
  collapse:boolean = false;

  icon: any = 
    {
      nav: faBars, close:faXmark, off:faPowerOff
    }
  

  constructor() { }

  ngOnInit(): void {
  }

  collapseMenu(){
    this.collapse = !this.collapse;
    this.getCollapse.emit(this.collapse);
    
  }

}
