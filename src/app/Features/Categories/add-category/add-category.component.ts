import { Component } from '@angular/core';
import { AddCategoryRequest } from '../models/add-category.model';
import { CategoryService } from '../Services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {

  model : AddCategoryRequest;

  constructor(private CategoryService: CategoryService){
    this.model = {
        name : "",
        urlHandle : ""
    }
  }

  onFormSubmit(){
    this.CategoryService.addCategory(this.model).subscribe({


      next: (response)=>{
         console.log('Success')
      }
    })
    console.log(this.model)
  }

}
