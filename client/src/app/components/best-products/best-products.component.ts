import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';
import { BestProducts } from 'src/app/model/BestProducts';
import { BestProductsService } from 'src/app/best-products.service';

@Component({
  selector: 'app-best-products',
  templateUrl: './best-products.component.html',
  styleUrls: ['./best-products.component.css'],
})
export class BestProductsComponent implements OnInit {
  list1: BestProducts[];
  list2: BestProducts[];

  constructor(bestProductsService: BestProductsService) {
    this.list1 = bestProductsService.getAll();
    this.list2 = bestProductsService.getAllList2();
  }

  ngOnInit(): void {
    this.shuffleList(this.list1);
    this.shuffleList(this.list2);
  }

  currentIndex = 0;
  currentIndex2 = 0;

  slideCarousel(direction: number): void {
    this.currentIndex += direction;
    if (this.currentIndex < 0) {
      this.currentIndex = this.list1.length - 1;
    } else if (this.currentIndex >= this.list1.length) {
      this.currentIndex = 0;
    }
  }

  slideCarousel2(direction: number): void {
    this.currentIndex2 += direction;
    if (this.currentIndex2 < 0) {
      this.currentIndex2 = this.list2.length - 1;
    } else if (this.currentIndex2 >= this.list2.length) {
      this.currentIndex2 = 0;
    }
  }

  addcId(id: string) {
    localStorage.setItem('id', id);
    console.log(id);
    location.href = '/best-product-details';
  }

  shuffleList(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
}
