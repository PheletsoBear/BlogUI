import { Component } from '@angular/core';
import { AddBlogPost } from '../models/add-blog-post.model';
import { BlogPostService } from '../services/blog-post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent {

model : AddBlogPost;


constructor(private BlogPostService: BlogPostService, private router: Router ) {
  this.model = {
    Title : '',
    ShortDesc: '',
    Content:'',
    UrlHandle:'',
    FeaturedImgUrl:'',
    Author:'',
    IsVisible: true,
    PublishDate: new Date()


  }
  
}

onFormSubmit(): void{
 this.BlogPostService.addBlogPost(this.model).subscribe({

  next: (response) =>{
    this.router.navigateByUrl('/admin/blogpostlist')
   
  }
 })
}

}
