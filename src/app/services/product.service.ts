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
  product: Product

  constructor() {
    this.products = [
      { id: 1, description: "Smartphone", price: 699.99 },
      { id: 2, description: "Laptop", price: 1299.99 },
      { id: 3, description: "Headphones", price: 149.99 },
      { id: 4, description: "Smartwatch", price: 299.99 },
      { id: 5, description: "Wireless Speaker", price: 79.99 }
    ]
    this.product = {
      id: -1,
      description: '',
      price: -1
    }
  }

  createProduct(product: Product) {
    this.products.push(product)
  }

  editProduct(product: Product) {
    const index = this.products.findIndex(sproduct => sproduct.id === product.id)

    this.products[index] = product
  }

  deleteProduct(product: Product) {
    const index = this.products.findIndex(sproduct => sproduct.id === product.id)

    this.products.splice(index, 1)
  }
}
