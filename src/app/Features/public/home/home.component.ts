import { Component, OnInit } from '@angular/core';
import { BlogPostService } from '../../BlogPost/services/blog-post.service';
import { Observable } from 'rxjs';
import { BlogPost } from '../../BlogPost/models/blog-post.model';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  blogs$?: Observable<BlogPost[]>;


  constructor(private blogPostService: BlogPostService,
             
  ){}
  
  
  ngOnInit(): void {

   this.blogs$ = this.blogPostService.getAllBlogPosts();


  }
}
