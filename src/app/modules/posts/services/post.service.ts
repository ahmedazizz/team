import {Injectable} from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import {Observable} from 'rxjs';
import {Post} from '../interfaces/post';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private db: AngularFirestore) {
  }

  getPosts(): Observable<Post[]> {
    return this.db.collection('posts').snapshotChanges()
      .pipe(
        map(results => {
          return results.map(result => {
            const data = result.payload.doc.data() as Post;
            const id = result.payload.doc.id;
            return {id, ...data};
          });
        }));
  }
}
