import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Product } from '../models/Product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  productForm: FormGroup

  constructor(private fb: FormBuilder, private productService: ProductService, private router: Router) {
    this.productForm = this.fb.group({
      id: this.productService.product.id,
      description: this.productService.product.description,
      price: this.productService.product.price
    })

    this.productForm.valueChanges.subscribe()
  }

  submitProduct() {
    const editedProduct: Product = this.productForm.value
    this.productService.editProduct(editedProduct)
    this.router.navigate(['/'])
  }
}
