import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
})
export class SearchResultsComponent implements OnInit {
  products!: Product[];
  key!: any;

  constructor(productService: ProductService) {
    this.key = localStorage.getItem('key');
    productService.getSearch(this.key).subscribe((data: any) => {
      this.products = data;
    });
  }

  affiliateName(){
    
  }
  addcId(cId: string) {
    localStorage.setItem('cId', cId);
    location.href = '/prodDetails';
  }

  ngOnInit(): void {}
}
