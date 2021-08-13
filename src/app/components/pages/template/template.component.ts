import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

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

  constructor() { }

  ngOnInit(): void {
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
