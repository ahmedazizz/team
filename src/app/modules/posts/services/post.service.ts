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

  getPost(id): Observable<Post> {
    return this.db.doc(`posts/${id}`).snapshotChanges().pipe(
      map(result => {
        const data = result.payload.data() as Post;
        const docId = result.payload.id;
        return {...{id: docId}, ...data};
      }));
  }

  createPost(post: Post) {
    this.db.collection<Post>('posts').add(post);
  }

  editPost(post: Post) {
    this.db.doc(`posts/${post.id}`).update(post);
  }

  deletePost(post: Post) {
    this.db.doc(`posts/${post.id}`).delete();
  }
}
