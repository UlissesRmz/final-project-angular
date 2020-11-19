import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../products.service';
import { Task } from './../task';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  //product: any[] = [];
  product: any[] = [];
  example: Task[] = [];

  constructor(private _service: ProductsService) {
    // this.product = _service.getProduct();
  }

  ngOnInit(): void {}

  getAllTasks() {
    this._service.getAllTasks().subscribe((info) => (this.example = info));
  }
}
