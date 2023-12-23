import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CategoryService } from '../Features/Categories/Services/category.service';
import { Category } from '../Features/Categories/models/category.model';
@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit, OnDestroy{
  paramsSubscription?: Subscription;
  id: string | null = null;
  category?: Category;

   constructor (private route: ActivatedRoute, private CategoryService :  CategoryService ){

   }
   ngOnInit(): void {
    //subscribing to the ActivatedRoute
     this.paramsSubscription = this.route.paramMap.subscribe({
       next: (params) => {
         this.id = params.get('id');
         if(this.id){
         // Get the data from the API for this category Id
         this.CategoryService.getCategoryById(this.id).subscribe({
          next: (response) =>{
               this.category = response;
              

          }
         });
         }
        },
       
       
      });
      
    }

    onFormSubmit(): void{
          console.log(this.category); 

    }
    
      ngOnDestroy(): void {
         this.paramsSubscription?.unsubscribe(); //this unsubscribes from the observable
      }
  


}
