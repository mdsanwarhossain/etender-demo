import {Component, Input,NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';
import {RouterLink,RouterLinkActive} from "@angular/router";
import {SmallheaderComponent} from "../../smallheader/smallheader.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, RouterLink, RouterLinkActive, SmallheaderComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Input() authenticate : string | null = null;
  isDropdownMenu : boolean = false;
  protected toggleMenu():void{
    this.isDropdownMenu = !this.isDropdownMenu;

  }
  openLoginPopup() {
    const loginPopup = document.getElementById('login-popup');
    if (loginPopup) {
      loginPopup.classList.remove('hidden');
    }
  }
}
