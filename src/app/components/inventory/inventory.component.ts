import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ProductsService } from '../products.service';
import { Forms_Regs } from '../forms_reg';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'],
})
export class InventoryComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'first_name',
    'last_name',
    'email',
    'password',
    'opciones',
    'opciones2',
  ];
  dataSource: MatTableDataSource<Forms_Regs>;
  dataInfor: Forms_Regs[] = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  //firebase
  items: any;

  constructor(firestore: AngularFirestore, private _service: ProductsService) {
    this._service.listItem().subscribe((item) => {
      this.items = item;
      this.dataInfor = item;
      console.log(this.items);
    });

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.items);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
