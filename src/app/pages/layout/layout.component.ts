import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  retraer:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  getCollapse(event:any){
    this.retraer = event;
  }

}
