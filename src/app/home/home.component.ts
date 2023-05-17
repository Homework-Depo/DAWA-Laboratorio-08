import { Component } from '@angular/core';
import { Product } from '../models/Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  displayedColumns: string[];
  products: Product[];

  constructor(private productService: ProductService) {
    this.products = productService.products
    this.displayedColumns = ['id', 'description', 'price']
  }
} 
