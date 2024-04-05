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
import { CommonModule } from '@angular/common';
import { ImageSelectorComponent } from "./shared/components/image-selector/image-selector.component";
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
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        MarkdownModule.forRoot(),
        ToastrModule.forRoot({
            positionClass: 'toast-top-right', // Adjust position
            preventDuplicates: true, // Prevent duplicate notifications
            closeButton: true, // Show close button
            progressBar: true, // Show progress bar
            timeOut: 3000, // Time duration in milliseconds
            extendedTimeOut: 1000, // Additional time for extended messages
            // Other configuration options...
        }), // ToastrModule added
        BrowserAnimationsModule,
        CommonModule,
        ImageSelectorComponent
    ]
})
export class AppModule { }
