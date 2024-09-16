import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.css'
})
export class ConfirmationComponent implements OnInit {
  name:string="";
  totalPrice: number=0;
  constructor(private cartService: CartService) {}
  ngOnInit() {
    this.name = this.cartService.getName();
    this.totalPrice = this.cartService.getTotalPrice();
  }
}
