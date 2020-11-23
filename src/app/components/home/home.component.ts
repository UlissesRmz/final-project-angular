import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../products.service';
import { Info_Data } from './../info_data';
// import { Observable } from '@angular/cli';

//Para le componenete
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  TableInfo: Info_Data[] = [];
  ELEMENT_DATA: Info_Data[] = [];
  constructor(private _service: ProductsService) {
    this.getData();
  }

  ngOnInit(): void {}

  //Get data API
  getData() {
    this._service
      .getAPI('https://reqres.in/api/users?page=2')
      .subscribe((data: any) => {
        //Obtiene los datos en la posicion 2
        this.ELEMENT_DATA = data.data;
        this.TableInfo = data.data;
        console.log(data.data[2]);
        console.log(this.TableInfo);
        console.log('Hre -->' + this.ELEMENT_DATA);
      });
  }

  //Informacion que se mostrara
  displayedColumns: string[] = [
    'id',
    'email',
    'first_name',
    'last_name',
    'avatar',
  ];

  //Manda a llamar la informacion
  dataSource = this.ELEMENT_DATA;
}
