import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { getRoles, logIn } from 'src/app/constants';
import { DataService } from 'src/app/services/data.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  formulario: FormGroup;

  emailPattern: string = "^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$";


  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private router: Router,
  ) {

    this.formulario = this.formBuilder.group({
      NOMBRE: [, [Validators.required, Validators.minLength(3)]],
      PASS: [, Validators.required],
    });
  }

  logIn() {

    this.spinner.show();
    this.dataService.getGenericoServiceParam(logIn, {
      user: this.formulario.controls['NOMBRE'].value,
      pass: this.formulario.controls['PASS'].value
    })
      .subscribe({
        next: (response: any) => {
          this.spinner.hide();
          if(response){
            this.toastr.warning('Bienvenido ' + response[0].persona.nombre + '!');
            this.goToProducts();
          } else {
            this.toastr.error('Los datos ingresado no corresponden con ningun usuario');
          }
        },
        error: (error) => {
          console.log(error);
          this.spinner.hide();
        }
      });
  }

  goToProducts(){
    this.router.navigate(['products']);
  }
}
