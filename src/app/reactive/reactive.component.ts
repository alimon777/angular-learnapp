import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../Product';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent {  
  product: Product = new Product(0, '', '', 0, 0);

  constructor(private service: DataService) {}

  productForm = new FormGroup({
    id: new FormControl(0, [
      Validators.required,
      Validators.min(1000),
      Validators.max(9999),
    ]),
    brand: new FormControl('', Validators.maxLength(20)),
    description: new FormControl(''),
    quantity: new FormControl(0),
    price: new FormControl(0),
  });

  onSubmit() {
    if (this.productForm.valid) {
      this.product = this.productForm.value as Product; // Update product with form values
      this.addProduct(this.product); // Call addProduct with updated product
    } else {
      console.error("Form is invalid", this.productForm);
    }
  }

  addProduct(product: Product): void {
    this.service
      .addProduct(product)
      .subscribe((data) => {
        this.product = data;
        console.log("PRODUCT ADDED:", data);
      });
  }
}
