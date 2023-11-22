import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../Services/category.service';
import { Category } from '../models/category.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit{

 categories$?: Observable<Category[]>; // This assigns our observable property to the array that contains data from Category object of the Category model 
 
 
 /*
 categories?: Category[]; // This assigns our optional property to the array that contains data from Category object of the Category mode...We use this when dealing with subscribe approach
*/

  constructor(private categoryService: CategoryService){} //injecting categoryservice
  
  //LifeCycle  Method
  ngOnInit(): void {
    
        this.categories$ =  this.categoryService.getAllCategories(); // This assigns our observable property to the services function contaikning the observable 

    /*
    this.categoryService.getAllCategories().subscribe({
        next: (Response)=>{
          this.categories = Response;
          console.log(Response)
        }
  }); //This subcribes to the service
  */
  }

}
