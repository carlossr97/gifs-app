import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})

export class BusquedaComponent  {

  constructor(
    private gifService:GifsService
  ) { }

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;
  

  buscar(){
    
    if(this.txtBuscar.nativeElement.value =='' || this.txtBuscar.nativeElement.value[0]==' '){
      return;
    }
    console.log(this.txtBuscar.nativeElement.value)
    let query =  this.txtBuscar.nativeElement.value;
    this.gifService.buscarGifs(query)
    this.txtBuscar.nativeElement.value= ''
    
  } 

}
