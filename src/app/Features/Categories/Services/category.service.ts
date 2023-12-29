import { Injectable } from '@angular/core';
import { AddCategoryRequest } from '../models/add-category.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/category.model';
import { UpdateCategoryRequest } from '../models/update-category-request.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {}

//This is the Method that Creates a new category via post method
addCategory(model: AddCategoryRequest): Observable<void> {


    return this.http.post<void>(`https://localhost:7223/api/categories`,model); //post method

}

//Returning all all categories using get method
getAllCategories(): Observable<Category[]>{
   return this.http.get<Category[]>('https://localhost:7223/api/Categories');
}

//Returning  category by id using get method
  getCategoryById(id: string): Observable<Category>{
     return this.http.get<Category>(`https://localhost:7223/api/Categories/${id}`)
  }

  updateCategory(id : string, updateCategoryRequest : UpdateCategoryRequest) : Observable<Category> {
   return this.http.put<Category>(`https://localhost:7223/api/Categories/${id}`, updateCategoryRequest);
  }
}
