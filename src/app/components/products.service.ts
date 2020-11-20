import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Info_Data } from './info_data';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {
    console.log('Woring...');
  }

  getAPI(url: string) {
    return this.http.get(url);
  }
}
