import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-prod-details',
  templateUrl: './prod-details.component.html',
  styleUrls: ['./prod-details.component.css'],
})
export class ProdDetailsComponent implements OnInit {
  prod!: Product;
  constructor(private productservice: ProductService) {
    productservice.getProdByCatalogueId().subscribe((data: any) => {
      this.prod = data;
    });
  }

  ngOnInit(): void {}
}
