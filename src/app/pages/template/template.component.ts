import { PaisService } from './../../services/pais.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit{

  //Agregar valores por defecto al formulario
  usuario = {
    nombre:'brigitte',
    apellido:'padilla',
    correo:'brigitte@gmail.com',
    pais:''
  }
  paises: any[] = [];

  constructor(private paisService:PaisService){

  }

  ngOnInit(): void {
    this.paisService.getPaises().subscribe(paises => {
      this.paises = paises;
      console.log(this.paises);

      this.paises.unshift({
        nombre:'[Seleccione Pais]',
        codigo:''
      })
    })
  }

  guardar(forma: NgForm){
    console.log(forma);
    console.log(forma.value);

    if(forma.invalid){
      Object.values(forma.controls).forEach(control => {
        console.log(control);
        control.markAsTouched();
      });
      return;
    }
  }
}
