import { Component } from '@angular/core';
import { SearchComponent } from './search/search.component';

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [
    SearchComponent
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  // name: string = "iPhone";
  // price: number = 999;
  // color: string = "Red";
  // discountedPrice: number = 799;

  name: string = "Sharizan Redzuan";

  addToCart: number = 0;

  product = {
    name: "iPhone 14",
    price: 1999,
    color: "Black",
    discountedPrice: 799,
    discount: 8.5,
    inStock: 5,
    pImage: '/assets/images/iphone.png'
  }

  getDiscountedPrice() {
    return this.product.price - (this.product.price * this.product.discount / 100);
  }

  onNameChanged(event: any) {
    console.log(event)
    this.name = event.target.value;
  }

  addItemToCart() {
    this.addToCart += 1;
  }

  decrementCartValue() {
    this.addToCart--;
  }

  incrementCartValue() {
    this.addToCart++;
  }

}
