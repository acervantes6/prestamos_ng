import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { collection, deleteDoc, doc, DocumentSnapshot, getDoc, getDocs, getFirestore, setDoc, updateDoc } from "firebase/firestore";

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  db: any;

  constructor() {
    // Initialize Firebase
    const app = initializeApp(environment.firebaseConfig);
    this.db = getFirestore(app);
  }

  public create(col: string, data: any) {
    const id = new Date().valueOf().toString();
    const ref = doc(this.db, col, id);
    return new Promise((res, rej) => {
      data = {
        ...data,
        createdAt: new Date().toISOString(),
      }
      setDoc(ref, data, { merge: true }).then(() => {
        res( {id, ...data});
      }).catch(e => rej(e));
    })
    
  }

  public read(col: string, id: string = '') {
    return new Promise((res, rej) => {
      if( id === '' ){
        const ref = collection(this.db, col);
        getDocs(ref).then( QueryDocumentSnapshot => {
          const results = !QueryDocumentSnapshot.docs.length ? [] : QueryDocumentSnapshot.docs.map( doc => {
            return {
              id: doc.id,
              ...doc.data
            }
          })

          res(results);
        }).catch(e => rej(e));
      } else {
        const ref = doc(this.db, col, id);
        getDoc(ref).then( (response: DocumentSnapshot ) => {
          const result = !response.exists ? null : {
              id: response.id,
              ...response.data()
          };
          res(result);
        }).catch(e => rej(e));
      }      
    });
  }

  public update(col: string, id: string, data: any) {
    const ref = doc(this.db, col, id);
    return new Promise((res, rej) => {
      data = {
        ...data,
        updatedAt: new Date().toISOString(),
      }
      updateDoc(ref, data).then(() => {
        res( {id, ...data});
      }).catch(e => rej(e));
    })
  }

  public del(col: string, id: string, softDelete: boolean = false) {
    return new Promise((res, rej) => {
      const ref = doc(this.db, col, id);
      if( softDelete ){
        deleteDoc(ref).then(() => {
          res(true);
        }).catch(e => rej(e));
      } else {
        const data = {
          deletedAt: new Date().toISOString(),
        }
        updateDoc(ref, data).then(() => {
          res(true);
        }).catch(e => rej(e));
      }      
    })
  }
}
