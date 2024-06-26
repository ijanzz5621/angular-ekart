import { Component, ViewChild } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FeaturedBrandsComponent } from './featured-brands/featured-brands.component';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [
    SearchComponent,
    NgFor,
    NgIf,
    ProductListComponent,
    ProductDetailComponent,
    FeaturedBrandsComponent
  ],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  // name: string = "iPhone";
  // price: number = 999;
  // color: string = "Red";
  // discountedPrice: number = 799;

  searchText: string = "";

  listOfString: string[] = ['Sharizan', 'Safinaz', 'Azian', 'Sara']

  name: string = "Sharizan Redzuan";

  addToCart: number = 0;

  @ViewChild(ProductListComponent) productListComponent: ProductListComponent | undefined;

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

  onSearchTextChanged(value: string) {
    // console.log(value)
    this.searchText = value;
  }

}
