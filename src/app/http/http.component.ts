import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../Product';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit{

  products:Product[]=[];
  product:Product = new Product(0,'','',0,0);
  newProduct:Product = new Product(26,'MI','Laptop',10,100)

  constructor(private service: DataService){

  }

  ngOnInit(): void {
    // this.addProduct(this.newProduct);
    // this.deleteProduct(19);
    // this.updateProduct(this.newProduct);
    this.fetchAllProducts();
  }

  fetchAllProducts(): void {
    this.service
      .fetchAllProducts()
      .subscribe((data)=>{
        this.products = data;
      });
  }

  deleteProduct(id:number): void {
    this.service
      .deleteProduct(id)
      .subscribe((data)=>{
        this.product = data;
      });
    console.log("PRODUCT DELETED");
  }

  addProduct(product:Product): void {
    this.service
      .addProduct(product)
      .subscribe((data)=>{
        this.product = data;
      });
    console.log("PRODUCT ADDED");
  }

  updateProduct(product:Product): void {
    this.service
      .addProduct(product)
      .subscribe((data)=>{
        this.product = data;
      });
    console.log("PRODUCT updated");
  }
}
