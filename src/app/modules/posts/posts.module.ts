import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleComponent } from './components/single/single.component';
import { ListComponent } from './components/list/list.component';
import {PostService} from './services/post.service';
import {EditComponent} from './components/edit/edit.component';
import {CreateComponent} from './components/create/create.component';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [PostService],
  declarations: [SingleComponent, ListComponent, EditComponent, CreateComponent]
})
export class PostsModule { }
