import { Post } from './../../interfaces/post';
import { PostService } from './../../services/post.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

posts: Observable<Post>;

  constructor(private service: PostService) { }

  ngOnInit() {}

  gitlist() {}

}
