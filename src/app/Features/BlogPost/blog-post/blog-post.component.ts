import { Component, OnDestroy, OnInit } from '@angular/core';
import { AddBlogPost } from '../models/add-blog-post.model';
import { BlogPostService } from '../services/blog-post.service';
import { Router } from '@angular/router';
import { CategoryService } from '../../Categories/Services/category.service';
import { Observable, Subscription } from 'rxjs';
import { Category } from '../../Categories/models/category.model';
import { ToastrService } from 'ngx-toastr';
import { ImageSelectorComponent } from 'src/app/shared/components/image-selector/image-selector.component';
import { ImageService } from 'src/app/shared/components/image-selector/image.service';
@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit, OnDestroy{

model : AddBlogPost;
categories$?: Observable<Category[]>;
isImageSelectorVisible : boolean = false;

imageSelectorSubscription?: Subscription;

constructor(private BlogPostService: BlogPostService, 
            private router: Router,
             private categoryService: CategoryService,
             private toastr: ToastrService,
            private imageService: ImageService  ) {
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
  this.imageSelectorSubscription = this.imageService.onSelectImage().subscribe({
    next:(selectedImage)=>{
      this.model.FeaturedImgUrl = selectedImage.url;
      this.closeImageSelector();
    }
  })
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
openImageSelector(): void{
  this.isImageSelectorVisible = true; // This opens up the modal
  
}
closeImageSelector():void{
  this.isImageSelectorVisible = false; //this closes the modal
}
ngOnDestroy(): void {
 this.imageSelectorSubscription?.unsubscribe();
}
}
