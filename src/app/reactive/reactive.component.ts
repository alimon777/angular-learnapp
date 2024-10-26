import { Component } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent {
  productForm = new FormGroup({
    id: new FormControl(0,[
      Validators.required,
      Validators.min(1000),
      Validators.max(9999),
    ]),
    brand: new FormControl('',Validators.maxLength(20)),
    description : new FormControl(''),
    quantity: new FormControl(0),
    price: new FormControl(0),
  })

  onSubmit() {
    console.error(this.productForm);
    console.warn(this.productForm.value);
    console.log(this.productForm.controls['price'].value);
  }
}
