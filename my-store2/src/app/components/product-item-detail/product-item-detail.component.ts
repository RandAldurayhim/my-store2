import { Component , OnInit} from '@angular/core';
import { Product } from '../../../../models/product';
import { ActivatedRoute, Router } from '@angular/router';

import { CartItem } from '../../../../models/cart-item';
import { ProductService } from '../../services/product/product.service';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrl: './product-item-detail.component.css'
})
export class ProductItemDetailComponent implements OnInit{
  product:Product|null = null;  
  selectedAmount: number = 1; 
  
  onAmountChange(selectedAmount: number) {
    console.log('Selected amount:', selectedAmount);
  }
  constructor(private route: ActivatedRoute, private productService: ProductService, private cartService:CartService, private router:Router ){

  }
  addToCart(product:Product) {
    if (product !== null) {
      const selectedProduct = new CartItem(product, this.selectedAmount);
      this.cartService.addToCart(selectedProduct);
      this.router.navigate(['/cart']);
    }

  }
         
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => { 
      const productId = parseInt(params.get('id')!);
      if (productId){
        this.product = this.productService.getProductById(productId);
      }
    });
  }
}
