import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddBlogPost } from '../models/add-blog-post.model';
import { BlogPost } from '../models/blog-post.model';
import { UpdateBlogPost } from '../models/update-blog-post-model.model';
import { Category } from '../../Categories/models/category.model';

@Injectable({
  providedIn: 'root'
})
export class BlogPostService {

  constructor(private http: HttpClient) { }

  addBlogPost(model: AddBlogPost): Observable<BlogPost>
  {
      return this.http.post<BlogPost>(`https://localhost:7223/api/BlogPosts`,model)
  }

    getAllBlogPosts(): Observable<BlogPost[]>{

      return this.http.get<BlogPost[]>(`https://localhost:7223/api/BlogPosts`);
    }

    getBlogPostById(id: string): Observable<BlogPost>{
      return this.http.get<BlogPost>(`https://localhost:7223/api/BlogPosts/${id}`);
    }

    getBlogPostByUrl(urlHandle: string): Observable<BlogPost>{
      return this.http.get<BlogPost>(`https://localhost:7223/api/BlogPosts/${urlHandle}`);
    }
    updateBlogPost(id:string, updatedBlogPost:UpdateBlogPost): Observable<BlogPost>{
      return this.http.put<BlogPost>(`https://localhost:7223/api/BlogPosts/${id}`,updatedBlogPost);
    }

    deleteBlogPost(id: string): Observable<BlogPost>{
      return this.http.delete<BlogPost>(`https://localhost:7223/api/BlogPosts/${id}`);
    }
}
