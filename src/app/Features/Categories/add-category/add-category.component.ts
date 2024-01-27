import { Component, OnDestroy } from '@angular/core';
import { AddCategoryRequest } from '../models/add-category.model';
import { CategoryService } from '../Services/category.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnDestroy {

  model : AddCategoryRequest;
  
  private addCategorySubscription?: Subscription

  constructor(private CategoryService: CategoryService, private router : Router){
    
    //form variables
    this.model = {
        name : "", //name variable
        urlHandle : "" //url handle variable
    }
  }
  
  onFormSubmit(form: any){

    // subscribing to the observable
    this.addCategorySubscription = this.CategoryService.addCategory(this.model).subscribe({
      
      
      next: (response)=>{

        
         this.router.navigateByUrl('/admin/categories')
         console.log(response);
          
      },
      error: (error) => {
        console.log('error');
      },
    })
    
  }
  
  ngOnDestroy(): void {
     this.addCategorySubscription?.unsubscribe(); //this unsubcribes from the observable
  }
}
