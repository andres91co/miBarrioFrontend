import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.services';
import { StoreService } from 'src/app/services/store.service';
import { Generic } from 'src/app/models/generic';
import { getCiudades, getProductos, getRoles } from 'src/app/constants';
import { forkJoin, Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  products: Product[] = [];
  offers: Product[] = [];

  constructor(private router: Router,
    private dataService: DataService,
    private storeService: StoreService){

     this.getData();
  }

  ngOnInit(): void {
    
  }

  getData(){
    
    let arrayConsultas: Observable<any>[] = [];
    
    arrayConsultas.push(this.dataService.getGenericoService(getRoles));
    arrayConsultas.push(this.dataService.getGenericoService(getCiudades));
    arrayConsultas.push(this.dataService.getGenericoService(getProductos));


    
    forkJoin(arrayConsultas).subscribe({
      next: (response: any) => {
         console.log(response);
         this.storeService.setRoles(response[0])

         this.products = response[2].slice(0,4);
         this.offers = response[2].slice(4, 8);
      },
      error: (error) => {
         console.log(error);
      }
  })};

  goToProducts(){
    this.router.navigate(['products']);
  }
}
