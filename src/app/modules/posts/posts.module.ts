import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleComponent } from './components/single/single.component';
import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  declarations: [SingleComponent, ListComponent, CreateComponent, EditComponent]
})
export class PostsModule { }
