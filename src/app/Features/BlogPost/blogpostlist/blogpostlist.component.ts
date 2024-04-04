import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogPostService } from '../services/blog-post.service';

import { BlogPost } from '../models/blog-post.model';
@Component({
  selector: 'app-blogpostlist',
  templateUrl: './blogpostlist.component.html',
  styleUrls: ['./blogpostlist.component.css']
})
export class BlogpostListComponent implements OnInit {
  blogPosts$?: Observable<BlogPost[]>;

  constructor(private BlogPostService: BlogPostService ) {}

  
  ngOnInit(): void {
        this.blogPosts$ = this.BlogPostService.getAllBlogPosts(); //On refresh Data is received
        
  }

}
