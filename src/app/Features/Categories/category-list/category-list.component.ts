import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../Services/category.service';
import { Category } from '../models/category.model';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit{

 categories?:Category[];

  constructor(private categoryService: CategoryService){} //injecting categoryservice
  ngOnInit(): void {
      this.categoryService.getAllCategories().subscribe({
        next: (Response)=>{
          this.categories = Response;
          console.log(Response)
        }
  });
  }

}
