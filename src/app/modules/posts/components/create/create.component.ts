import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {

  form: FormGroup;

  constructor(private builder: FormBuilder, private service: PostService) {
  }

  ngOnInit() {
    this.form = this.builder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      rate: [0, Validators.required],
      created_at: ['', Validators.required]
    });
  }

  getClasses(control: string) {
    return {
      'has-error': !this.form.get(control).valid && this.form.get(control).touched,
      'has-success': this.form.get(control).valid && this.form.get(control).touched
    };
  }

  submit() {
    this.service.addPost(this.form.value);
  }


}
