import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from '../../../../models/cart-item';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
}
)
export class CartComponent implements OnInit {
  fname = '';
  address = '';
  creditCard = '';
  totalPrice = 0;
  constructor(private router:Router ,  private cartService : CartService) {}
  cartList: CartItem[]=[];

ngOnInit(): void {
  this.fname = this.cartService.getName();
  this.address = this.cartService.getAddress();
  this.creditCard = this.cartService.getCreditCard();
  this.cartList = this.cartService.getCartItems();
  this.totalPrice = this.cartList.reduce((acc, item) => acc + (item.price * item.amount), 0);
}
onSubmit():void{

   this.cartService.setName(this.fname);
   this.cartService.setTotalPrice(this.totalPrice);
   this.router.navigate(['/confirmation']);
   this.cartService.clearCart();

}


updateCartItem(cartItem: CartItem) {
  if (cartItem.amount === 0) {
    this.cartService.removeFromCart(cartItem.id);
    this.cartList = this.cartList.filter(item => item.id !== cartItem.id);
    alert("Item removed from cart!");
  }
  else if (isNaN(cartItem.amount) || cartItem.amount < 1) {
    cartItem.amount = 1;
  } else {
    cartItem.amount = Math.floor(cartItem.amount);
  }

  this.cartService.updateCartItem(cartItem);
  this.totalPrice = this.cartList.reduce((acc, item) => acc + (item.price * item.amount), 0);
}
updateName(fname: string) {
  if (this.validateName(fname)) {
    this.cartService.setName(fname);
  }
}

updateAddress(address: string) {
  if (this.validateAddress(address)) {
    this.cartService.setAddress(address);
  }
}

updateCreditCard(creditCard: string) {
  if (this.validateCreditCard(creditCard)) {
    this.cartService.setCreditCard(creditCard);
  }
}

private validateName(name: string): boolean {
  return name.length >= 3;
}

private validateAddress(address: string): boolean {
  return address.length >= 6;
}

private validateCreditCard(creditCard: string): boolean {
  return creditCard.length === 16 && !isNaN(Number(creditCard));
}

}
