import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './Features/Categories/category-list/category-list.component';
import { AddCategoryComponent } from './Features/Categories/add-category/add-category.component';
import { EditCategoryComponent } from './Features/Categories/edit-category/edit-category.component';
import {  BlogpostListComponent } from './Features/BlogPost/blogpostlist/blogpostlist.component';
import { BlogPostComponent } from './Features/BlogPost/blog-post/blog-post.component';
import { EditBlogPostComponent } from './Features/BlogPost/edit-blog-post/edit-blog-post.component';
import { HomeComponent } from './Features/public/home/home.component';
import { BlogDetailsComponent } from './Features/public/blog-details/blog-details.component';

const routes: Routes = [
  {
      path: '',
      component: HomeComponent
  },
  {
    path:'blog/:url',
    component: BlogDetailsComponent
  },
  {
    path: 'admin/categories',
    component:  CategoryListComponent

  },
  
  {
    path: 'admin/categories/add',
    component: AddCategoryComponent
  },
  {
    path:'admin/categories/:id',
    component: EditCategoryComponent
  
  },
  {
    path: 'admin/blogpostlist',
    component: BlogpostListComponent
  },
  

  {
    path: 'admin/blogpost/add',
    component: BlogPostComponent
  },

  {path: 'admin/blog/:id',
   component: EditBlogPostComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
