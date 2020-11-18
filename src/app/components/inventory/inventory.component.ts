import { Component, OnInit } from '@angular/core';

// import { AngularFirestore } from '@angular/fire/firestore';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'],
})
export class InventoryComponent implements OnInit {
  // items: Observable<any[]>;
  constructor() {
    //   this.items = firestore.collection('items').valueChanges();
  }

  ngOnInit(): void {}
}
