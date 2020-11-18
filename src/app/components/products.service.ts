import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: any[] = [
    {
      name: 'Cubrebocas',
      price: 200,
      description: 'En excelente estado',
    },
  ];

  constructor() {
    console.log('Woring...');
  }

  getProduct() {
    return this.products;
  }
}
