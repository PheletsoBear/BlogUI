import { Component, OnDestroy, OnInit } from '@angular/core';
import { BlogPostService } from '../services/blog-post.service';
import { Subscription } from 'rxjs';
import { BlogPostComponent } from '../blog-post/blog-post.component';
import { BlogPost } from '../models/blog-post.model';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-edit-blog-post',
  standalone: true,
  imports: [],
  templateUrl: './edit-blog-post.component.html',
  styleUrl: './edit-blog-post.component.css'
})
export class EditBlogPostComponent implements OnInit, OnDestroy{
  
  id : string | null = null
  paramSubscription?: Subscription;
  blogPost?: BlogPost ;
  constructor(private route: ActivatedRoute,private BlogPostService: BlogPostService ) {}
  ngOnInit(): void {
    
    this.paramSubscription = this.route.paramMap.subscribe({
      
      next: (params)=>{
        
        this.id = params.get('id');
     if(this.id){
       
       this.BlogPostService.getBlogPostById(this.id).subscribe({
         next: (response) =>{
           this.blogPost = response;
           
           
          }
        });
      }
      
    },
    
  });
  
  
}
ngOnDestroy(): void {
  this.paramSubscription?.unsubscribe()
}



}
