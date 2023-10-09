import { Component, OnInit } from '@angular/core';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products!: Product[];
  furnitureProducts!: Product[];
  constructor(productService: ProductService) {
    localStorage.removeItem('cId');
    localStorage.removeItem('key');

    productService.getDiscountProductsBycatalog("9767").subscribe((data: any) => {
      this.furnitureProducts = data;
    });
    productService.getDiscountProducts().subscribe((data: any) => {
      this.products = data;
    });

  }

  ngOnInit(): void { }

  addcId(cId: string) {
    localStorage.setItem('cId', cId);
    location.href = '/prodDetails';
  }
}
