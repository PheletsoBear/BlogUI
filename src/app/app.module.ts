import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Core/Components/navbar/navbar.component';
import { CategoryListComponent } from './Features/Categories/category-list/category-list.component';
import { AddCategoryComponent } from './Features/Categories/add-category/add-category.component';
import {HttpClientModule} from '@angular/common/http';
import { EditCategoryComponent } from './Features/Categories/edit-category/edit-category.component';
import { BlogpostListComponent } from './Features/BlogPost/blogpostlist/blogpostlist.component';
import { BlogPostComponent } from './Features/BlogPost/blog-post/blog-post.component';
import { MarkdownModule } from 'ngx-markdown';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoryListComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    BlogpostListComponent,
    BlogPostComponent
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MarkdownModule.forRoot(),
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
