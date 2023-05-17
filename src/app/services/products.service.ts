import { Injectable } from '@angular/core';
import { Iproducts } from '../interfaces/iproducts';
import { productData } from '../data';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products:Iproducts[]= productData;

  constructor() { }
}
