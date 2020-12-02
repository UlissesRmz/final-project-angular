import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Forms_Regs } from './forms_reg';
import { map } from 'rxjs/operators'; // This is where I import map operator
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private itemsCollection: AngularFirestoreCollection<Forms_Regs>;
  items: Observable<Forms_Regs[]>;
  constructor(private http: HttpClient, private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Forms_Regs>('items');
    this.items = this.itemsCollection.snapshotChanges().pipe(
      map((actions) =>
        actions.map((a) => {
          const data = a.payload.doc.data() as Forms_Regs;
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      )
    );
    console.log('Woring...');
  }

  listItem() {
    return this.items;
  }
  addItem(item: Forms_Regs) {
    this.itemsCollection.add(item);
  }

  getAPI(url: string) {
    return this.http.get(url);
  }
}
