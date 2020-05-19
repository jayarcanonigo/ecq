import { Injectable } from '@angular/core';  
import { Observable } from 'rxjs';  
import { AngularFirestoreCollection, AngularFirestore, DocumentReference } from '@angular/fire/firestore';  
import { map, take } from 'rxjs/operators';  
import { AngularFireStorage , AngularFireUploadTask } from '@angular/fire/storage';
export interface Category {
  id?: string;
  name: string;
  url: string;
  created: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private categories: Observable<Category[]>;
  private todoCollection: AngularFirestoreCollection<Category>;

  constructor(private db: AngularFirestore, private afStorage: AngularFireStorage) {
    this.todoCollection = this.db.collection<Category>('categories');
    this.categories = this.todoCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getFiles(): Observable<Category[]> {
    return this.categories;

  }

  uploadToStorage(information): AngularFireUploadTask {
    let newName = `${new Date().getTime()}.txt`;

    return this.afStorage.ref(`files/${newName}`).putString(information);
  }

  deleteFile(file) {
    let key = file.key;
    let storagePath = file.fullPath;

    this.todoCollection.doc(key).delete();
    return this.afStorage.ref(storagePath).delete();
  }


  storeInfoToDatabase(metainfo) {
    // let toSave = {
    //   created: metainfo.timeCreated,
    //   url: metainfo.metadata.downloadURLs[0],
    //   fullPath: metainfo.fullPath,
    //   contentType: metainfo.contentType
    // }
    console.log("toSave" ,metainfo);
    
      return null;
    //return this.todoCollection.add(category);
  }
}

