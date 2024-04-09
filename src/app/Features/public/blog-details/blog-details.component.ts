import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPostService } from '../../BlogPost/services/blog-post.service';
import { Observable } from 'rxjs';
import { BlogPost } from '../../BlogPost/models/blog-post.model';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';
@Component({
  selector: 'app-blog-details',
  standalone: true,
  imports: [CommonModule, MarkdownModule],
  templateUrl: './blog-details.component.html',
  styleUrl: './blog-details.component.css'
})
export class BlogDetailsComponent implements OnInit {

  url: string | null = null;
  blogPosts$?: Observable<BlogPost>;
  constructor( private route: ActivatedRoute,
               private blogPostService: BlogPostService){}


  ngOnInit(): void {
    
    this.route.paramMap.subscribe({
      next: (params)=>{
         this.url = params.get('url');
      }
    })

    //fetch blog details by url

     if(this.url){
     this.blogPosts$ = this.blogPostService.getBlogPostByUrl(this.url);
     }

  }

}
