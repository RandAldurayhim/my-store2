import { Injectable } from '@angular/core';
import { CartItem } from '../../../../models/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private name = '';
  private address = '';
  private creditCard = '';
  private totalPrice = 0;
  private cart: CartItem[] = [];

  setName(name:string){
    this.name=name;
  }
  setTotalPrice(totalPrice:number){
    this.totalPrice=totalPrice;
  }

  
  setAddress(address: string) {
    this.address = address;
  }
  getAddress(){
    return this.address;
  }
  setCreditCard(creditCard: string) {
    this.creditCard = creditCard;
  }
  getCreditCard(){
    return this.creditCard;
  }
  getName(){
    return this.name;
  }

  getTotalPrice(){
    return this.totalPrice;
  }
 
  addToCart(cartItem: CartItem) {
  const existingItem = this.cart.find(item => item.id === cartItem.id);
  if (existingItem) {
    existingItem.amount += cartItem.amount; 
  } else {
    this.cart.push(cartItem); 
  }
  this.calculateTotalPrice();
  
}
calculateTotalPrice() {
  this.totalPrice = this.cart.reduce((acc, item) => acc + (item.amount * item.price), 0);
}
   removeFromCart(itemId: number) {
     this.cart = this.cart.filter(item => item.id !== itemId);
   }
 
   clearCart() {
     this.cart = [];
     this.address='';
     this.name='';
     this.creditCard='';
   }
 
   getCartItems() {
     return [...this.cart];
   }
   updateCartItem(cartItem: CartItem) {
    const existingItem = this.cart.find(item => item.id === cartItem.id);
    if (existingItem) {
      existingItem.amount = cartItem.amount;
    }
    this.calculateTotalPrice();
  }
}
