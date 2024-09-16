import { Component, Input } from '@angular/core';
import { Product } from '../../../../models/product';
import { Router } from '@angular/router';
import { CartItem } from '../../../../models/cart-item';
import { CartService } from '../../services/cart/cart.service';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css',
})
export class ProductItemComponent {
  @Input() product: Product = new Product(0, '', 0, '', '');
  selectedAmount: number = 1;

  onAmountChange(selectedAmount: number) {
    console.log('Selected amount:', selectedAmount);
  }
  addToCart(product: Product) {
    const cartService = this.cartService;
    if (product !== null) {
      const selectedProduct = new CartItem(product, this.selectedAmount);
      cartService.addToCart(selectedProduct);
      this.router.navigate(['/cart']);
    }
  }

  constructor(
    private router: Router,
    private cartService: CartService,
  ) {}

  navigateToDetailsPage() {
    this.router.navigate(['/product/' + this.product.id]);
  }
}
