import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './../components/task';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private api = 'https://reqres.in/api/users?page=2';

  constructor(private http: HttpClient) {
    console.log('Woring...');
  }

  getAllTasks() {
    const path = 'https://reqres.in/api/users?page=2';
    return this.http.get<Task[]>(path);
  }
}
