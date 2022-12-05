import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { faAngleDown, faChevronLeft, faChevronRight, faEye, faSearch } from '@fortawesome/free-solid-svg-icons';
import { NzTableComponent } from 'ng-zorro-antd/table';
import { randomPlaca, randomMarca, randomModelo, randomKilomnetraje, randomTransmision } from './utils-preparacion';

@Component({
  selector: 'app-preparacion',
  templateUrl: './preparacion.component.html',
  styleUrls: ['./preparacion.component.scss']
})
export class PreparacionComponent implements OnInit {

  @ViewChild('basicTable') table!: NzTableComponent<any>;

  cargaMasiva:boolean=false;
  pageSise: number=0;
  icons:any={eye:faEye,down:faAngleDown,search:faSearch, arrow_left: faChevronLeft, arrow_right:faChevronRight}
  titles:any[]= [
    {
      name: 'ID',
      compare: (a: any, b: any) => a.id - b.id
    },
    {
      name: 'Placa',
      compare: (a: any, b: any) => a.placa.localeCompare(b.placa)
    },
    {
      name: 'Marca',
      compare: (a: any, b: any) => a.marca.localeCompare(b.marca)
    },
    {
      name: 'Modelo',
      compare: (a: any, b: any) => a.modelo - b.modelo
    },
    {
      name: 'Kilometraje',
      compare: (a: any, b: any) => a.kilometraje.localeCompare(b.kilometraje)
    },
    {
      name: 'Transmision',
      compare: (a: any, b: any) => a.transmision.localeCompare(b.transmision)
    },
    {
      name: 'Tipo',
      compare: (a: any, b: any) => a.tipo.localeCompare(b.tipo)
    },
    {
      name: 'Precio de compra',
      compare: (a: any, b: any) => a.precio.localeCompare(b.precio)
    },
    {
      name: 'Proviniencia'
    }
]
  list_table: any[] = [];

  
  checked = false;
  indeterminate = false;
  listOfCurrentPageData: readonly any[] = [];
  listOfData: readonly any[] = [];
  setOfCheckedId = new Set<number>();
  
  opciones: any[] = [10, 20, 50, 100];

  form: FormGroup = this.formBuilder.group({
    num_pagina:[10],
    num_actual_pagina:[1],
    data_search:[null]
  })

  get num_pagina():any{return this.form.get('num_pagina')}
  get num_actual_pagina():any{return this.form.get('num_actual_pagina')}
  get data_search():any{return this.form.get('data_search')}

  constructor(private formBuilder:FormBuilder){
    // this.list_table = [];
    // for(let i = 0; i <= 100; i++){
    //   this.list_table.push(
    //     {
    //       id: i,
    //       placa: randomPlaca(6),
    //       marca: randomMarca(),
    //       modelo: randomModelo(),
    //       kilometraje: randomKilomnetraje(),
    //       transmision: randomTransmision(),
    //       tipo: 'Automovil',
    //       precio: '$40.900.000'
    //     }
    //   )
    // }
  }

  cargaDatos(){
    setTimeout(()=>{
      this.list_table = [];
      for(let i = 0; i <= 100; i++){
        this.list_table.push(
          {
            id: i,
            placa: randomPlaca(6),
            marca: randomMarca(),
            modelo: randomModelo(),
            kilometraje: randomKilomnetraje(),
            transmision: randomTransmision(),
            tipo: 'Automovil',
            precio: '$40.900.000'
          }
        )
      }  
      this.cargaMasiva = true;
    }, 5000)
  }

  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  onAllChecked(value: boolean): void {
    this.listOfCurrentPageData.forEach(item => this.updateCheckedSet(item.id, value));
    this.refreshCheckedStatus();
  }

  onCurrentPageDataChange($event: readonly any[]): void {
    this.listOfCurrentPageData = $event;
    this.refreshCheckedStatus();
    this.pageSise=this.calcularPaginas(this.num_pagina.value,
      this.table != null ? this.table.nzData.length : this.list_table.length);
    console.log(this.pageSise);
  }

  refreshCheckedStatus(): void {
    if(this.listOfCurrentPageData.length>0){
      this.checked = this.listOfCurrentPageData.every(item => this.setOfCheckedId.has(item.id));
      this.indeterminate = this.listOfCurrentPageData.some(item => this.setOfCheckedId.has(item.id)) && !this.checked;
    }else{
      this.checked=false;
    }
    
  }
  onPageIndexChange(event:any){
    this.num_actual_pagina.setValue(event);
  }

  ngOnInit(): void {
    this.listOfData = new Array(200).fill(0).map((_, index) => ({
      id: index,
      name: `Edward King ${index}`,
      age: 32,
      address: `London, Park Lane no. ${index}`
    }));

    
  }
  cambioPagina(num: number){
    this.num_pagina.setValue(num);
    this.calcularPaginas(this.num_pagina.value, this.table.nzData.length);
  }
  pasarPagina(tipo:number){
    let tamanoPagina = this.calcularPaginas(this.num_pagina.value, this.table.nzData.length);
    if(tipo==1){
      let sig_pagina = this.num_actual_pagina.value+1;
      if(sig_pagina<=tamanoPagina){
        this.num_actual_pagina.setValue(this.num_actual_pagina.value+1);
      }
    }else{
      let sig_pagina = this.num_actual_pagina.value-1;
      if(sig_pagina>0){
        this.num_actual_pagina.setValue(sig_pagina);
      }
    }
  }
  calcularPaginas(pageSize:number, longitudTabla: number){
   return Math.ceil(longitudTabla/pageSize);
  }
  isVisible = false;
  isOkLoading = false;

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isOkLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isOkLoading = false;
    }, 3000);
  }

  handleCancel(): void {
    this.isVisible = false;
  }
  
}
