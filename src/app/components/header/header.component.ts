import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {

    this.form = this.formBuilder.group({
      SEARCH: [,],
    });
  }

  ngOnInit(): void {
    $(document).ready(function() {
      $('[data-toggle="tooltip"]').tooltip();
    })
  }

  goToProducts(){
    this.router.navigate(['products']);
  }

  goToLogin(){
    this.router.navigate(['login']);
  }
}
