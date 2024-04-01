import { Component, OnDestroy, OnInit } from '@angular/core';
import { BlogPostService } from '../services/blog-post.service';
import { Subscription } from 'rxjs';
import { MarkdownModule } from 'ngx-markdown';
import { BlogPost } from '../models/blog-post.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-edit-blog-post',
  standalone: true,
  templateUrl: './edit-blog-post.component.html',
  styleUrl: './edit-blog-post.component.css',
  imports: [FormsModule, CommonModule, MarkdownModule]
})
export class EditBlogPostComponent implements OnInit, OnDestroy{
  
  id : string | null = null
  paramSubscription?: Subscription;
  model?: BlogPost ;
  constructor(private route: ActivatedRoute,private BlogPostService: BlogPostService ) {}
  ngOnInit(): void {
    
    this.paramSubscription = this.route.paramMap.subscribe({
      
      next: (params)=>{
        
        this.id = params.get('id');
     if(this.id){
       
       this.BlogPostService.getBlogPostById(this.id).subscribe({
         next: (response) =>{
           this.model = response;
           
           
          },
          error: (error: any) =>{
            console.error('Error:', error);
          }
          
        });
      }
      
    },
    
  });
  
  
}
ngOnDestroy(): void {
  this.paramSubscription?.unsubscribe()
}


onFormSubmit(){
  
}


}
