import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Item {
  name: string;
}

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'],
})
export class InventoryComponent implements OnInit {
  //     private itemsCollection;
  //   items: Observable<any[]>;
  constructor(_db: AngularFirestore) {}
  ngOnInit(): void {}
}
