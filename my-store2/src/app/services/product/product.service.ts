import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../../../models/product';
import { Observable, of, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) {}

  products: Product[] | null = null;

  getProducts(): Observable<Product[]> {
    if (!this.products) {
      return this.http.get<Product[]>('assets/data.json').pipe(
        tap(products => this.products = products)
      );
    }
    return of(this.products); 
  }
  
  getProductById(id: number): Product | undefined {
    if (!this.products) {
      throw new Error('Products not loaded yet. Call getProducts() first.');
    }
    return this.products.find(product => product.id === id);
  }
  
}