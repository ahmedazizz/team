import {Routes} from '@angular/router';
import {ListComponent} from './modules/posts/components/list/list.component';

export const ApplicationRoutes: Routes = [
  {path: 'posts', component: ListComponent}
];
