import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-side-menus',
  standalone: true,
  imports: [
    NgClass,
    NgForOf,
    NgIf
  ],
  templateUrl: './side-menus.component.html',
  styleUrl: './side-menus.component.scss'
})
export class SideMenusComponent {
  @Input() menu: any;
  @Input() isShow: number | undefined;
  @Output() showChange = new EventEmitter<number>();

  isHovering: boolean = false;

  onMouseEnter() {
    this.isHovering = true;
  }

  onMouseLeave() {
    this.isHovering = false;
  }

  showSingleGrid(inx: number) {
    this.showChange.emit(this.isShow === inx ? 0 : inx);
  }
}
