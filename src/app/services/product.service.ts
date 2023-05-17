import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  /* products: Product[] = [
    {
      id: 1,
      description: "Product Name 1",
      price: 111
    },
    {
      id: 2,
      description: "Product Name 2",
      price: 222
    },
    {
      id: 3,
      description: "Product Name 3",
      price: 333
    },
    {
      id: 4,
      description: "Product Name 4",
      price: 444
    },
    {
      id: 5,
      description: "Product Name 5",
      price: 555
    },
  ] */
  products: Product[]

  constructor() { 
    this.products = [
      {
        id: 1,
        description: "Product Name 1",
        price: 111
      },
      {
        id: 2,
        description: "Product Name 2",
        price: 222
      },
      {
        id: 3,
        description: "Product Name 3",
        price: 333
      },
      {
        id: 4,
        description: "Product Name 4",
        price: 444
      },
      {
        id: 5,
        description: "Product Name 5",
        price: 555
      },
    ]
  }

  createProduct(product: Product) {
    this.products.push(product)
  }
}
