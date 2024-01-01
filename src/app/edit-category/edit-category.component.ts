import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CategoryService } from '../Features/Categories/Services/category.service';
import { Category } from '../Features/Categories/models/category.model';
import { UpdateCategoryRequest } from '../Features/Categories/models/update-category-request.model';


@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit, OnDestroy{
  paramsSubscription?: Subscription;
  id: string | null = null;
  category?: Category;
  editCategorySubcriprion?: Subscription;

   constructor (private route: ActivatedRoute, private CategoryService :  CategoryService, private router: Router ){

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
         const updateCategoryRequest: UpdateCategoryRequest = {
         
          name : this.category?.name ?? '',
          urlHandle : this.category?.urlHandle ?? ''

        
        };
   if (this.id){

     this.editCategorySubcriprion =  this.CategoryService.updateCategory(this.id, updateCategoryRequest).subscribe({
      next : (Response) =>{
       
        this.router.navigateByUrl('/admin/categories')

      }
    
    })
   }

    }

    onDelete(): void{
            
    }
    
      ngOnDestroy(): void {
         this.paramsSubscription?.unsubscribe(); //this unsubscribes from the observable
         this.editCategorySubcriprion?.unsubscribe(); //this unsubscribes from the observable
      }
  


}
