import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import baseURL from './helper';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) { }

  // getSearch(search: String) {
  //   return this.http.post(baseURL + "/revenue/", revenue);
  // }

  getSearch(search: String): Observable<Product> {
    return this.http.get<Product>(baseURL + '/walmart/search/' + search);
  }

  getProdByCatalogueId(): Observable<Product> {
    return this.http.get<Product>(
      baseURL + '/walmart/catalogItemId/' + localStorage.getItem('cId')
    );
  }

  getDiscountProducts(): Observable<Product> {
    return this.http.get<Product>(
      baseURL + "/walmart/getDiscounts"
    );
  }

  getDiscountProductsBycatalog(cIId: String): Observable<Product> {
    return this.http.get<Product>(
      baseURL + "/walmart/getDiscountsByCatalog/" + cIId
    );
  }


  
}
