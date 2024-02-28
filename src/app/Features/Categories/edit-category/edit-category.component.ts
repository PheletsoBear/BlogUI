import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CategoryService } from '../Services/category.service';
import { Category } from '../models/category.model';
import { UpdateCategoryRequest } from '../models/update-category-request.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit, OnDestroy{
  paramsSubscription?: Subscription;
  id: string | null = null; //Adding the id property to hold the route id
  category?: Category;
  editCategorySubcriprion?: Subscription;

   constructor (private route: ActivatedRoute, private CategoryService :  CategoryService, private router: Router,private toastr: ToastrService ){

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

    onFormSubmit( form : any): void{
         const updateCategoryRequest: UpdateCategoryRequest = {
         
          name : this.category?.name ?? '', //comment
          urlHandle : this.category?.urlHandle ?? ''

        
        };
   if (this.id){

     this.editCategorySubcriprion =  this.CategoryService.updateCategory(this.id, updateCategoryRequest).subscribe({
      next : (response) =>{
       
        this.router.navigateByUrl('/admin/categories');
        console.log(form);

      }
    
    })
   }

    }

    onDelete(): void{
            
      if(this.id){
        this.CategoryService.deleteCategory(this.id).subscribe({
          next: (response) =>{
            
            this.router.navigateByUrl('/admin/categories')

             
          }
        })
      }

    }
    
      ngOnDestroy(): void {
         this.paramsSubscription?.unsubscribe(); //this unsubscribes from the observable
         this.editCategorySubcriprion?.unsubscribe(); //this unsubscribes from the observable
      }
  

        
}
