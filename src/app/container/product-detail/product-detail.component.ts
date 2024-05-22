import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { ProductItem } from '../../models/ProductItem';

@Component({
  selector: 'product-detail',
  standalone: true,
  imports: [NgIf],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  product: ProductItem | undefined;

  constructor() {
  }
}
