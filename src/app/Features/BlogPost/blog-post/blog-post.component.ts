import { Component, OnInit } from '@angular/core';
import { AddBlogPost } from '../models/add-blog-post.model';
import { BlogPostService } from '../services/blog-post.service';
import { Router } from '@angular/router';
import { CategoryService } from '../../Categories/Services/category.service';
import { Observable } from 'rxjs';
import { Category } from '../../Categories/models/category.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit{

model : AddBlogPost;
categories$?: Observable<Category[]>;


constructor(private BlogPostService: BlogPostService, 
            private router: Router,
             private categoryService: CategoryService,
             private toastr: ToastrService ) {
  this.model = {
    Title : '',
    ShortDesc: '',
    Content:'',
    UrlHandle:'',
    FeaturedImgUrl:'',
    Author:'',
    IsVisible: true,
    PublishDate: new Date(),
    categories: []

  }
  
}
  ngOnInit(): void {
        this.categories$ = this.categoryService.getAllCategories();
  }

onFormSubmit(): void{
 this.BlogPostService.addBlogPost(this.model).subscribe({

  next: (response) =>{
   
    this.toastr.success('Blog post successfully added', 'Success');
    this.router.navigateByUrl('/admin/blogpostlist')
        
  },
  error: (error) => {
    const errorMessage = error.message || 'An error occurred while adding the blog post.';
    this.toastr.error(errorMessage, 'Error');
  }
 })
}

}
