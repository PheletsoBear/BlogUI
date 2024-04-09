import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BlogImage } from './models/blog-image.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

 selectedImage: BehaviorSubject<BlogImage> = new BehaviorSubject<BlogImage>({
id: '',
fileExtension: '',
fileName: '',
title: '',
url: ''
 });

  constructor(private Http: HttpClient) { }

  getAllImages(): Observable<BlogImage[]>{
    return this.Http.get<BlogImage[]>(`https://localhost:7223/api/images`);
  }

  uploadImage(file: File, fileName: string, title: string): Observable<BlogImage>{
    
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', fileName);
    formData.append('title', title);
    
   return this.Http.post<BlogImage>(`https://localhost:7223/api/images`,formData)
  }
 
  selectImage(image:  BlogImage): void{
this.selectedImage.next(image);
  }

  onSelectImage(): Observable<BlogImage>{
    return this.selectedImage.asObservable()
  }
}
