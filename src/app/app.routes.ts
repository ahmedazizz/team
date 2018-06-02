import {Routes} from '@angular/router';
import {ListComponent} from './modules/posts/components/list/list.component';
import {CreateComponent} from './modules/posts/components/create/create.component';
import {EditComponent} from './modules/posts/components/edit/edit.component';

export const ApplicationRoutes: Routes = [
  {path: 'posts', component: ListComponent},
  {path: 'posts/create', component: CreateComponent},
  {path: 'posts/edit/:{id}', component: EditComponent}
];
