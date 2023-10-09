import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-category-discounts',
  templateUrl: './category-discounts.component.html',
  styleUrls: ['./category-discounts.component.css']
})
export class CategoryDiscountsComponent implements OnInit {

  furnitureProducts!: Product[];

  constructor(productService: ProductService) {
    productService.getDiscountProductsBycatalog("9767").subscribe((data: any) => {
      console.log(data);
      this.furnitureProducts = data;
    });
  }

  ngOnInit(): void {
  }

  currentIndex = 0;

  slideCarousel(direction: number): void {
    console.log(direction+" "+this.currentIndex+" "+this.furnitureProducts.length);
    this.currentIndex += direction;
    if (this.currentIndex < 0) {
      this.currentIndex = this.furnitureProducts.length - 1;
    } else if (this.currentIndex >= this.furnitureProducts.length) {
      this.currentIndex = 0;
    }
  }

  addcId(cId: string) {
    localStorage.setItem('cId', cId);
    location.href = '/prodDetails';
  }
}
