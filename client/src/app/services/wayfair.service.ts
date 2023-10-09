import { Injectable } from '@angular/core';
import { Wayfair } from '../model/Wayfair';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import baseURL from './helper';


@Injectable({
  providedIn: 'root'
})
export class WayfairService {

  constructor(private http: HttpClient) { }

  getSearch(search: String): Observable<Wayfair> {
    return this.http.get<Wayfair>(baseURL + '/wayfair/search/' + search);
  }
}
