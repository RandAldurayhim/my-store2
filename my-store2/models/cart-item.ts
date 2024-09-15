import { Product } from "./product";

export class CartItem extends Product {
  amount: number;

  constructor(product: Product, amount = 1) {
    super(product.id, product.name, product.price, product.url, product.description);
    this.amount = amount;
  }
}