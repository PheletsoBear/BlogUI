import { Component, Output,EventEmitter, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ImageService } from './image.service';
import { Observable } from 'rxjs';
import { BlogImage } from './models/blog-image.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-image-selector',
  standalone: true,
  imports: [FormsModule, CommonModule],

  templateUrl: './image-selector.component.html',
  styleUrl: './image-selector.component.css'
})
export class ImageSelectorComponent implements OnInit{
  
  
    private file?: File;
    fileName: string ="";
    title: string = "";
    images$?: Observable<BlogImage[]>

    @ViewChild('form', {static: false}) imageUploadForm?: NgForm;

  constructor(private imageServices: ImageService){}
 
  ngOnInit(): void {
   this.getImages();
  }


  @Output() closeButtonClicked = new EventEmitter<void>(); //creates custom event that a parent component can listen to when emitted by this component
  emitCloseEvent(): void{
    this.closeButtonClicked.emit();
  }


  onFileUploadChange(event: Event):void{
    const element = event.currentTarget as HTMLInputElement;
    this.file = element.files?.[0]
  }

  uploadImage(): void{
    if(this.file && this.fileName !== '' && this.title !=='')
      {
        // Image service to upload the image
        this.imageServices.uploadImage(this.file, this.fileName,this.title).subscribe({
          next:(response) =>{
            this,this.imageUploadForm?.resetForm();
            this.getImages();
          }
        })
      }
  }

  selectImage(image: BlogImage):void{
    this.imageServices.selectImage(image);
  }

  private getImages(): void{
    this.images$ = this.imageServices.getAllImages();
  }
}
