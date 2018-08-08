
import {take, map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { IPost } from './post.interface';
import { Observable,Subject } from 'rxjs';
import { HttpClient,HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type':'application/json'
    })
};

@Injectable()
export class PostsService {
    postsUrl = 'api/posts';

    constructor(private http: HttpClient) {
    }

    get(): Observable<IPost[]> {
      return this.http.get<IPost[]>(this.postsUrl);
    }

    getDetail(id: string):Observable<IPost>{
        const url = `${this.postsUrl}/${id}`;
        return this.http.get<IPost>(url);
    }

    update(post: IPost):Observable<IPost> {
        const url = `${this.postsUrl}/${post.id}`;
        return this.http.put<IPost>(url,post,httpOptions);
    }

    add(post: IPost):Observable<IPost> {
        return this.http.post<IPost>(this.postsUrl,post,httpOptions);
    }

    delete(id: string): Promise<any> {
        const url = `${this.postsUrl}/${id}`;
        return new Promise((resolve, reject) => {
           this.http.delete(url,httpOptions).pipe(
                take(1))
                .subscribe({
                    next: () => {
                        // update data
                        resolve({
                            success: true,
                            message: `Post #${id} deleted successfully  `
                        });
                    },
                    error: (errors) => {
                        console.log('there was an error sending the query', errors);
                        reject({
                            success: false,
                            message: errors
                        })
                    }
                });
        });
    }


}