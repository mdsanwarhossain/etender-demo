import {Component, NgIterable} from '@angular/core';
import {SideMenusComponent} from "../side-menus/side-menus.component";
import {AuthService} from "../auth-service.service";
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {NavbarComponent} from "../Layout/Navbar/navbar.component";
import {FooterComponent} from "../Layout/Footer/footer.component";
import {TenderCartComponent} from "../Common/Tender-cart/tender-cart.component";
import {TenderCart} from "../Common/Tender-cart/tender-cart.model";
import {CommonService} from "../common.service";
import {MatProgressBar} from "@angular/material/progress-bar";
import {TenderFeaturesComponent} from "../Common/Tender-Features/tender-features.component";
import {TenderFeaturesModel} from "../Common/Tender-Features/tender-features.model";

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [
    SideMenusComponent,
    NgForOf,
    NavbarComponent,
    FooterComponent,
    TenderCartComponent,
    MatProgressBar,
    TenderFeaturesComponent,
    NgOptimizedImage
  ],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss'
})
export class SideMenuComponent {

  isShow: number = 0;
  // authentication: boolean = false;
  leftMenu: (NgIterable<unknown> & NgIterable<any>) | undefined | null;
  tenderCarts: TenderCart[] | null;
  tenderFeatures: TenderFeaturesModel[] | null;
  constructor(private _common:CommonService) {
    this.tenderCarts=this._common.tenderCarts;
    this.leftMenu=this._common.leftMenu;
    this.tenderFeatures=this._common.tenderFeatures;
  }

  // constructor(private authService: AuthService) { }
  //
  // ngOnInit(): void {
  //   this.authentication = this.authService.isAuthenticated(); // Adjust based on your authentication logic
  // }


}
