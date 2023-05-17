import { Component } from '@angular/core';
import { Iproducts } from './interfaces/iproducts';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
products:Iproducts[];

constructor(private productsService:ProductsService){
        this.products = productsService.products;
}
}
  