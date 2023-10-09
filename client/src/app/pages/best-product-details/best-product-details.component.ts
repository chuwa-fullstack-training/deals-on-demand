import { Component, OnInit } from '@angular/core';
import { BestProductsService } from 'src/app/best-products.service';
import { BestProducts } from 'src/app/model/BestProducts';

@Component({
  selector: 'app-best-product-details',
  templateUrl: './best-product-details.component.html',
  styleUrls: ['./best-product-details.component.css']
})
export class BestProductDetailsComponent implements OnInit {
  bestProducts: BestProducts|undefined;

  constructor(private bestProductsService: BestProductsService) {
    this.bestProducts=bestProductsService.getProductById(localStorage.getItem('id'));
   }

  ngOnInit(): void {
  }

  imageUrl: string = '';

  showImage(Image: any) {
    this.imageUrl = Image;
  }

}
