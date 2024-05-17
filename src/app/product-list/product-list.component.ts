import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  // name: string = "iPhone";
  // price: number = 999;
  // color: string = "Red";
  // discountedPrice: number = 799;

  name: string = "Sharizan Redzuan";

  product = {
    name: "iPhone 14",
    price: 1999,
    color: "Black",
    discountedPrice: 799,
    discount: 8.5,
    inStock: 55,
    pImage: '/assets/images/iphone.png'
  }

  getDiscountedPrice() {
    return this.product.price - (this.product.price * this.product.discount / 100);
  }
}
