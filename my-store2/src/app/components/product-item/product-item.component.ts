import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../../models/product';
import { Router } from '@angular/router';
import { CartItem } from '../../../../models/cart-item';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css',
})
export class ProductItemComponent {
  @Input() product: Product = new Product(0, '', 0, '', '');
  @Output() addedProduct: EventEmitter<CartItem> = new EventEmitter();
  selectedAmount = 1;

  onAmountChange(selectedAmount: number) {
    console.log('Selected amount:', selectedAmount);
  }
  addToCart(product: Product) {
    if (product !== null) {
      const selectedProduct = new CartItem(product, this.selectedAmount);
      this.addedProduct.emit(selectedProduct);
      alert("Item added to cart!");
      this.router.navigate(['/cart']);
    }
  }

  constructor(
    private router: Router,
  ) {}

  navigateToDetailsPage() {
    this.router.navigate(['/product/' + this.product.id]);
  }
}
