import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject ,  Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../posts.service';
import { IPost } from '../post.interface';


@Component({
    templateUrl: './post-detail.component.html',
      styleUrls: ['./post-detail.component.scss']
})

export class postDetailComponent implements OnInit, OnDestroy {
    public pageTitle: string = 'Post detail:';
    public post: any;
    public errorMessage: string;
    public postControl = new FormControl();
    // Observable variable of the graphql query
    public nameFilter: Subject<string> = new Subject<string>();
    private sub: Subscription;
    public id;
    // Inject Angular2Apollo service
    constructor(private _postsService: PostsService, private route: ActivatedRoute) {
    }

    public ngOnInit(): void {
        this.sub = this.route.params.subscribe(params => {
            this.id = params['id'];
        });
        this._postsService.getDetail(this.id).subscribe(resultPost => {
            this.post = resultPost;
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}