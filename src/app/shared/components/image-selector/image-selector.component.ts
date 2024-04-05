import { Component, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image-selector',
  standalone: true,
  imports: [],
  templateUrl: './image-selector.component.html',
  styleUrl: './image-selector.component.css'
})
export class ImageSelectorComponent {
  @Output() closeButtonClicked = new EventEmitter<void>(); //creates custom event that a parent component can listen to when emitted by this component
  emitCloseEvent(): void{
    this.closeButtonClicked.emit();
  }
}
