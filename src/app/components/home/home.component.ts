import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../products.service';
import { Info_Data } from './../info_data';
import { MatTableDataSource } from '@angular/material/table';
// import { Observable } from '@angular/cli';

//Para le componenete
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  dataInter: Info_Data[] = [];
  TableInfo: Info_Data[] = [];
  constructor(private _service: ProductsService) {}

  ngOnInit(): void {
    this.getData();
  }

  //Get data API
  getData() {
    this._service
      .getAPI('https://reqres.in/api/users?page=2')
      .subscribe((data: any) => {
        //Obtiene los datos en la posicion 2
        this.dataInter = data.data;
      });
  }

  //Manda a llamar la informacion

  //Informacion que se mostrara
  displayedColumns: string[] = [
    'id',
    'email',
    'first_name',
    'last_name',
    'avatar',
  ];

  columnas = [
    { titulo: 'Id', name: 'id' },
    { titulo: 'Email', name: 'email' },
    { titulo: 'First Name', name: 'first_name' },
    { titulo: 'Last Name', name: 'last_name' },
    { titulo: 'Avatar', name: 'avatar' },
  ];
}
