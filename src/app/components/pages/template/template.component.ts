import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisesService } from 'src/app/services/paises.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [
  ]
})
export class TemplateComponent implements OnInit {

  usuario = {
    nombre : "",
    apellido : "",
    correo : ""
  }

  paises:any[] = [];

  constructor(private _paises: PaisesService) { }

  ngOnInit(): void {
    this._paises.getPaises().subscribe((paises) => {
      this.paises = paises;
      console.log(this.paises);
    },(err) => {
      console.log(err);
    });
  }

  formData(form: NgForm){

    if(form.invalid){

      Object.values(form.controls).forEach(control =>{
        control.markAllAsTouched();
      })
      return;
    }
    console.log(form.value);
    form.resetForm();
  }

}
