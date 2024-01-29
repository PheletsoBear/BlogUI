import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddBlogPost } from '../models/add-blog-post.model';
import { BlogPost } from '../models/blog-post.model';

@Injectable({
  providedIn: 'root'
})
export class BlogPostService {

  constructor(private http: HttpClient) { }

  addBlogPost(model: AddBlogPost): Observable<BlogPost>
  {
      return this.http.post<BlogPost>(`https://localhost:7223/api/BlogPosts`,model)
  }
}
