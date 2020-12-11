import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../products.service';
import { Info_Data } from './../info_data';
import { MatTabsModule } from '@angular/material/tabs';
import { typeWithParameters } from '@angular/compiler/src/render3/util';
// import { Observable } from '@angular/cli';

//Para le componenete
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  dataInter: Info_Data[] = [];

  constructor(private _service: ProductsService) {}

  ngOnInit(): void {
    this.getData();
  }
  num1 = numeroAleatorioDecimales(0, 6);

  num3 = numeroAleatorioDecimales(0, 6);

  num4 = numeroAleatorioDecimales(0, 6);
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
    'avatar',
    'email',
    'first_name',
    'last_name',
  ];
}

function numeroAleatorioDecimales(min: number, max: number) {
  var num = Math.floor(Math.random() * (max - min));
  return num + min;
}
