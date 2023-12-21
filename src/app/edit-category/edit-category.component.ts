import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit, OnDestroy{
  paramsSubscription?: Subscription;
  id: string | null= null;

   constructor (private route: ActivatedRoute){

   }
   ngOnInit(): void {
     this.paramsSubscription = this.route.paramMap.subscribe({
       next: (params) => {
         this.id = params.get('id');
        }
      });
      
    }
      ngOnDestroy(): void {
         this.paramsSubscription?.unsubscribe(); //this unsubscribes from the observable
      }
  


}
