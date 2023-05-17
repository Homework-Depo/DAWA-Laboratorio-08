import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { Product } from '../models/Product';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  displayedColumns: string[];
  products: Product[];

  constructor(public productService: ProductService, private router: Router) {
    this.products = productService.products
    this.displayedColumns = ['id', 'description', 'price', 'op']
  }

  submitProduct(product: Product) {
    this.productService.product = product
    this.router.navigate(['/editar'])
  }

  sendToDelete(product: Product) {
    this.productService.deleteProduct(product)
    this.reloadData()
  }

  reloadData() {
    this.products = this.productService.products
  }

} 
