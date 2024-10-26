import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './Product';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private products: Product[] = [];
  product:Product = new Product(0,'','',0,0);

  constructor(private http: HttpClient) { 
    this.products = [
      new Product(1021, 'Tata', 'Dish TV', 10, 2500),
      new Product(3023, 'Wipro', 'Blubs', 210, 300),
      new Product(3421, 'TVS', 'Belts', 210, 5500),
      new Product(21, 'Reliance', 'Dish TV', 50, 4500),
      new Product(432, 'ActFiber', 'Router', 60, 1400),
      new Product(909, 'Samsung', 'Smart TV', 50, 72500),
      new Product(654, 'LG', 'Airconditioners', 20, 52500),
      new Product(675, 'Crompton', 'Ceiling Fans', 25, 1500),
      new Product(2901, 'Carrier', 'Airconditioners', 5, 50500),
      new Product(721, 'Usha', 'Table fans', 40, 1200),
      new Product(454, 'One+', 'Mobiles', 50, 82500)
    ];
  }

  getProducts(): Product[] {
    return this.products;
  }

  fetchAllProducts(): Observable<Product[]> {
    const url: string = 'http://localhost:8090/product/api1.0/all';
    return this.http.get<Product[]>(url);
  }

  addProduct(product:Product):Observable<any>{
    const url: string = 'http://localhost:8090/product/api1.0/add';
    return this.http.post(url,product);
  }

  deleteProduct(id:number):Observable<any>{
    const url: string = 'http://localhost:8090/product/api1.0/delete/'+id;
    return this.http.delete(url);
  }

  updateProduct(product:Product):Observable<any>{
    const url: string = 'http://localhost:8090/product/api1.0/add';
    return this.http.put(url,product);
  }
}
