import { Component, Input } from '@angular/core';
import { NgIf, NgFor, NgStyle } from '@angular/common';
import { ProductItem } from '../../models/ProductItem';
import { ProductListComponent } from '../product-list/product-list.component';
import { SetBackground } from '../../CustomDirectives/SetBackground.directive';
import { AppHoverDirective } from '../../CustomDirectives/app-hover.directive';

@Component({
  selector: 'product-detail',
  standalone: true,
  imports: [
    NgIf, 
    NgFor,
    NgStyle,
    SetBackground,
    AppHoverDirective
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  
  @Input()
  productListComponent: ProductListComponent | undefined = undefined;

  product: ProductItem | undefined; 

  title: String = 'HOST TITLE';

  ngOnInit(){
    this.product = this.productListComponent!.selectedProduct;
  }

  constructor() {
  }
}
