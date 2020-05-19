import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore, DocumentReference } from '@angular/fire/firestore';  

import { map, take } from 'rxjs/operators';  

export interface Category {  
  id?: string;  
  name: string;  
  url: string;  
} 

@Injectable({
  providedIn: 'root'
})


export class CategoriesService {

  private categories: Observable<Category[]>;  
  private categoriesCollection: AngularFirestoreCollection<Category>;  

  constructor(private db: AngularFirestore) {
    this.categoriesCollection = this.db.collection<Category>('category');  
    this.categories = this.categoriesCollection.snapshotChanges().pipe(  
      map(actions => {  
        return actions.map(a => {  
          const data = a.payload.doc.data();  
          const id = a.payload.doc.id;  
          return { id, ...data };  
        });  
      })  
    ); 
  }

  
  getCategories(): Observable<Category[]> {  
    return this.categories;  
  }  
  
  getTodo(id: string): Observable<Category> {  
    return this.categoriesCollection.doc<Category>(id).valueChanges().pipe(  
      take(1),  
      map(category => {  
        category.id = id;  
        return category;  
      })  
    );  
  }  
  
  addCategory(category: Category): Promise<DocumentReference> {  
    return this.categoriesCollection.add(category);  
  }  
  
  updateCategory(category: Category): Promise<void> {  
    return this.categoriesCollection.doc(category.id).update({ name: category.name, notes: category.url });  
  }  
  
  deleteCategory(id: string): Promise<void> {  
    return this.categoriesCollection.doc(id).delete();  
  }  

  uploadToStorage(information){
    console.log(information);
    
    //let newName = `${new Date().getTime()}`;
  }
}
