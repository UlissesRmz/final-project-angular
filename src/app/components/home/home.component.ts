import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  // product: any[] = [];

  constructor(private _service: ProductsService) {
    // this.product = _service.getProduct();
  }

  ngOnInit(): void {}

  getAllTasks() {
    this._service.getAllTasks().subscribe((todos) => {
      console.log(todos);
    });
  }
}
