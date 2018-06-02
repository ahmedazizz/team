import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Post} from '../../interfaces/post';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {

  form: FormGroup; // initial value = undefined

  constructor(private builder: FormBuilder,
              private service: PostService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.service.getPost(params['id']).subscribe((data: Post) => {
        console.log(data);
        this.form = this.builder.group({
          title: [data.title, Validators.required],
          content: [data.content, Validators.required],
          rate: [data.rate, Validators.required],
          created_at: [data.createdAt, Validators.required],
          id: [data.id, Validators.required]
        });
      });
    });
  }

  getClasses(control: string) {
    return {
      'has-error': !this.form.get(control).valid && this.form.get(control).touched,
      'has-success': this.form.get(control).valid && this.form.get(control).touched
    };
  }

  submit() {
    this.service.editPost(this.form.value);
    this.router.navigate(['/list']);
  }

}
