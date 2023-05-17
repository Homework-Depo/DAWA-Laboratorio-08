import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  productForm: FormGroup

  constructor(private fb: FormBuilder, private productService: ProductService, private router: Router) {
    this.productForm = this.fb.group({
      id: '',
      description: '',
      price: ''
    })

    this.productForm.valueChanges.subscribe()
  }

  submitProduct() {
    const newProduct = this.productForm.value
    this.productService.createProduct(newProduct)
    this.router.navigate(['/'])
  }
}
