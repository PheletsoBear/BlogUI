import { Component, OnDestroy, OnInit } from '@angular/core';
import { BlogPostService } from '../services/blog-post.service';
import { Observable, Subscription } from 'rxjs';
import { MarkdownModule } from 'ngx-markdown';
import { BlogPost } from '../models/blog-post.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CategoryService } from '../../Categories/Services/category.service';
import { Category } from '../../Categories/models/category.model';
import { UpdateBlogPost } from '../models/update-blog-post-model.model';
@Component({
  selector: 'app-edit-blog-post',
  standalone: true,
  templateUrl: './edit-blog-post.component.html',
  styleUrl: './edit-blog-post.component.css',
  imports: [FormsModule, CommonModule, MarkdownModule]
})
export class EditBlogPostComponent implements OnInit, OnDestroy {

  id: string | null = null
  model?: BlogPost;
  categories$?: Observable<Category[]>;
  DeleteCategorySubscription?: Subscription;
  selectedCategories?: any[];


  paramSubscription?: Subscription;
  updateBlogPostSubscription?: Subscription;
  getBlogPostSubscription?: Subscription;


  constructor(private route: ActivatedRoute,
              private BlogPostService: BlogPostService, 
              private categoryService: CategoryService,
              private router:Router
              ) 
              { }

  ngOnInit(): void {
 this.categories$ = this.categoryService.getAllCategories();
    this.paramSubscription = this.route.paramMap.subscribe({

      next: (params) => {

        this.id = params.get('id');
        if (this.id) {

          this.getBlogPostSubscription = this.BlogPostService.getBlogPostById(this.id).subscribe({
            next: (response) => {
              this.model = response;
              this.selectedCategories = response.categories.map(x => x.id);


            },
            error: (error: any) => {
              console.error('Error:', error);
            }

          });
        }

      },

    });


  }
  
  
  onFormSubmit() {
    // Convert this model to request object
    if (this.model && this.id) //checks if the model and id are not null
    {
      var UpdateBlogPost: UpdateBlogPost = {
        Author: this.model.author,
        Content: this.model.content,
        ShortDesc: this.model.shortDesc,
        FeaturedImgUrl: this.model.featuredImgUrl,
        IsVisible: this.model.isVisible,
        PublishDate: this.model.publishDate,
        Title: this.model.title,
        UrlHandle: this.model.urlHandle,
        categories: this.selectedCategories?? [] //if this is null/underfined we return the empty array
      };
      
      this.updateBlogPostSubscription = this.BlogPostService.updateBlogPost(this.id, UpdateBlogPost).subscribe({
        next: (Response) => {
          
          this.router.navigateByUrl('/admin/blogpostlist');
          console.log(this.selectedCategories)
        }
      })
    }
  }
  
  onDelete(): void{
   if(this.id){
    this.DeleteCategorySubscription = this.BlogPostService.deleteBlogPost(this.id).subscribe({
      next: (response) =>{
        alert("Successfully Deleted");
        this.router.navigateByUrl('/admin/blogpostlist');
      }
    })
   }
}

  ngOnDestroy(): void {
    this.paramSubscription?.unsubscribe();
    this.updateBlogPostSubscription?.unsubscribe();
    this.getBlogPostSubscription?.unsubscribe();

  }
  
}
