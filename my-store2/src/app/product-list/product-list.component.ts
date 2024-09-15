import { Component } from '@angular/core';
import { Product } from '../../../models/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  productList: Product[]=[];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productList = this.productService.getProducts();
      
  }
}
