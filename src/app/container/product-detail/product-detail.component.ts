import { Component, Input } from '@angular/core';
import { NgIf, NgFor, NgStyle } from '@angular/common';
import { ProductItem } from '../../models/ProductItem';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'product-detail',
  standalone: true,
  imports: [
    NgIf, 
    NgFor,
    NgStyle
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  
  @Input()
  productListComponent: ProductListComponent | undefined = undefined;

  product: ProductItem | undefined; 

  ngOnInit(){
    this.product = this.productListComponent!.selectedProduct;
  }

  constructor() {
  }
}
