import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent {

  formulario: FormGroup;
  formularioArray: FormGroup[] = [];

  emailPattern: string = "^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$";

  cars = [
      { x: 1, d: 'Volvo' },
      { x: 2, d: 'Saab' },
      { x: 3, d: 'Opel' },
      { x: 4, d: 'Audi' },
  ];

  constructor(
    private formBuilder: FormBuilder,
  ) {

    this.formulario = this.formBuilder.group({
      NOMBRE: [, [Validators.required, Validators.minLength(3)]],
      CELULAR: [, [Validators.required, Validators.minLength(3)]],
      EMAIL: [, [Validators.required,  Validators.pattern(this.emailPattern)]],
      PASS: [, Validators.required],
      DATE: [, Validators.required],
      LISTA: [, Validators.required],
    });
  }

  guardar(){
    console.log('Nombre:', this.formulario.controls['NOMBRE'].value);
    console.log('Email:', this.formulario.controls['EMAIL'].value);
    console.log('data:', this.formulario.controls['DATE'].value);
  }

  change(date: string){
    console.log('padre', date);
    
  }
}
