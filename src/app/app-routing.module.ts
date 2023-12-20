import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './Features/Categories/category-list/category-list.component';
import { AddCategoryComponent } from './Features/Categories/add-category/add-category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';

const routes: Routes = [
  {
    path: 'admin/categories',
    component:  CategoryListComponent

  },
  {
    path: 'admin/categories/add',
    component: AddCategoryComponent
  },
  {
    path:'admin/categories/:id',
    component: EditCategoryComponent
  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
