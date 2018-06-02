import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';
import {PostsModule} from './modules/posts/posts.module';
import {UserModule} from './modules/user/user.module';
import {ProfileModule} from './modules/profile/profile.module';
import {RouterModule} from '@angular/router';
import {ApplicationRoutes} from './app.routes';
import {AngularFirestore} from 'angularfire2/firestore';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    PostsModule,
    UserModule,
    ProfileModule,
    RouterModule.forRoot(ApplicationRoutes)
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule {
}
