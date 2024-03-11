import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {

  //Agregar valores por defecto al formulario
  usuario = {
    nombre:'',
    apellido:'',
    correo:''
  }

  guardar(forma: NgForm){
    console.log(forma);
    console.log(forma.value);
  }
}
