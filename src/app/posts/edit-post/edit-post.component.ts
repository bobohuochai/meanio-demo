
import {take} from 'rxjs/operators';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../posts.service';
import { IPost } from '../post.interface';

@Component({
  selector: 'edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent {
 form: FormGroup;
  private sub: Subscription;
  public id;
  public post: any;

  constructor(
  formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private _postsService: PostsService
  ) {
    this.form = formBuilder.group({
      title: ['', [
        Validators.required,
      ]],
      content: ['']
    });
  }

  public ngOnInit(): void {
    const that = this
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this._postsService.getDetail(this.id).subscribe(result => {
      that.post = result;
      this.form.setValue({ title: result.title,content: result.content });
    });
    
  }

  public save() {
    if (!this.form.valid) 
      return;
    const editPost = {"id": this.post.id,"title":this.form.value.title,"content": this.form.value.content } as IPost;
    this._postsService.update(editPost)
    .pipe(
      take(1))
      .subscribe({
        next: () => {
          // get edit data      
          this.router.navigate(['/posts']);
        }, error: (errors) => {
          console.log('there was an error sending the query', errors);
        }
      });
  }
}
