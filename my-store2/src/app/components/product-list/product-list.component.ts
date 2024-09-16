import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../models/product';
import { ProductService } from '../../services/product/product.service';
import { CartItem } from '../../../../models/cart-item';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  productList: Product[]=[];

  constructor(private productService: ProductService, private cartService: CartService ) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(products => {
      this.productList = products;
    });
  }
  addedProduct(event: CartItem){
    this.cartService.addToCart(event);
  }

}
