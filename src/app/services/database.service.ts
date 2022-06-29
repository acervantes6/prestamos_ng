import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/compat/firestore";


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private firestore: AngularFirestore) { }

  public create(collection: string, data: any) {
    return this.firestore.collection(collection).add(data);
  }
}
