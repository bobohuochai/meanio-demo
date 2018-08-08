
import {take} from 'rxjs/operators';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostsService } from '../posts.service';
import { IPost } from '../post.interface';
@Component({
  selector: 'new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent {
  form: FormGroup;

  constructor(
    formBuilder: FormBuilder,
    private _postService: PostsService,
    private router: Router
  ) {
    this.form = formBuilder.group({
      title: ['', [
        Validators.required,
      ]],
      content: ['']
    });
  }
  public save() {
    if (!this.form.valid) return;
    const newPost: IPost = { "title":this.form.value.title,"content":this.form.value.content } as IPost;
   this._postService.add(newPost).pipe(
    take(1))
      .subscribe({
        next: () => {
          console.log('got a new post', newPost);
          // get new data      
          this.router.navigate(['/posts']);
        }, error: (errors) => {
          console.log('there was an error sending the query', errors);
        }
      });
  }
}
