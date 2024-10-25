import { Component } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {
  orderedQty: { [productId: number]: number } = {};
  products: any[] = [
    {
        productId: 1456,
        description: "Amaterasu",
        brand: "Sony",
        price: 1000,
        availableQty: 100,
        freeShipping: false,
        orderedQty: 0 // Initialize the ordered quantity
    },
    {
        productId: 1457,
        description: "Galaxy S21",
        brand: "Samsung",
        price: 799,
        availableQty: 50,
        freeShipping: true,
        orderedQty: 0 // Initialize the ordered quantity
    },
    {
        productId: 1458,
        description: "iPhone 13",
        brand: "Apple",
        price: 999,
        availableQty: 30,
        freeShipping: true,
        orderedQty: 0 // Initialize the ordered quantity
    }
];

  isMember: boolean = true;

  public placeOrder(product: any): void {
    const quantity = this.orderedQty[product.productId];

    if (quantity > 0 && quantity <= product.availableQty) {
        console.log(`${quantity} of product with ID ${product.productId} is ordered`);
        
        // Update available quantity after placing the order
        product.availableQty -= quantity; 
        this.orderedQty[product.productId] = 0; // Reset ordered quantity after placing the order

        // Additional logic for handling orders can be added here
    } else {
        console.log("Invalid order quantity.");
    }
}


  // get isAvailable(): boolean {
  //   return this.orderedQty > this.availableQty || this.orderedQty <= 0;
  // }
}
