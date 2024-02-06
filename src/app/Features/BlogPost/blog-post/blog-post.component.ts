import { Component, OnInit } from '@angular/core';
import { AddBlogPost } from '../models/add-blog-post.model';
import { BlogPostService } from '../services/blog-post.service';
import { Router } from '@angular/router';
import { CategoryService } from '../../Categories/Services/category.service';
import { Observable } from 'rxjs';
import { Category } from '../../Categories/models/category.model';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit{

model : AddBlogPost;
categories$?: Observable<Category[]>;


constructor(private BlogPostService: BlogPostService, private router: Router, private categoryService: CategoryService ) {
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
    this.router.navigateByUrl('/admin/blogpostlist')
   console.log(this.model)
  }
 })
}

}
