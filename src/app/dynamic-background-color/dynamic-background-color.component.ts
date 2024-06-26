import { Component } from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-dynamic-background-color',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './dynamic-background-color.component.html',
  styleUrl: './dynamic-background-color.component.scss'
})
export class DynamicBackgroundColorComponent {
  backgroundColor = 'bg-gray-200'; // Default background color (Tailwind class)
  alternateBackgroundColor = 'bg-blue-500'; // Background color to switch to

  toggleBackgroundColor() {
    this.backgroundColor = this.backgroundColor === 'bg-gray-200' ? this.alternateBackgroundColor : 'bg-gray-200';
  }
}
