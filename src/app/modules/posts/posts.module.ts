import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleComponent } from './components/single/single.component';
import { ListComponent } from './components/list/list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SingleComponent, ListComponent]
})
export class PostsModule { }
