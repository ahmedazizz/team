import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleComponent } from './components/single/single.component';
import { ListComponent } from './components/list/list.component';
import {PostService} from './services/post.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [PostService],
  declarations: [SingleComponent, ListComponent]
})
export class PostsModule { }
