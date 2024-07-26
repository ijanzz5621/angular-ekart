import { Component, Input } from '@angular/core';
import { NgFor, NgIf, NgStyle } from '@angular/common';

import { ProductItem } from '../../../models/ProductItem';
import { HighlightDirective } from '../../../CustomDirectives/highlight.directive';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [    
    NgFor,
    NgIf,
    NgStyle,
    HighlightDirective
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})

export class ProductComponent {
  @Input()
  product: ProductItem;

  constructor() {
    this.product = new ProductItem();
  }

  hideItem(element: HTMLDivElement) {
    console.log(element);
  }

}
