import {Component, Input,NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';
import {RouterLink,RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,NgOptimizedImage,RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Input() authenticate : string | null = null;
  isDropdownMenu : boolean = false;
  protected toggleMenu():void{
    this.isDropdownMenu = !this.isDropdownMenu;
  }
}
