import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { getProductos } from 'src/app/constants';
import { Product } from 'src/app/models/product';
import { DataService } from 'src/app/services/data.services';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  products: Product[] = [];
  formulario!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private dataService: DataService) {
    this.formulario = this.formBuilder.group({
      PRODUCTO: [, []],
    });
  }

  ngOnInit(): void {
    this.dataService.getGenericoService(getProductos)
      .subscribe({
        next: (response: any) => {
          if (response) {
            this.products = response;
          }
        },
        error: (error) => {
          console.log(error);
        }
      });
  }
}
