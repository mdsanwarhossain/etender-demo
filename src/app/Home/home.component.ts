import { Component } from '@angular/core';
import {NavbarComponent} from "../Layout/Navbar/navbar.component";
import {FooterComponent} from "../Layout/Footer/footer.component";
import {TenderCart} from "../Common/Tender-cart/tender-cart.model";
import {TenderCartComponent} from "../Common/Tender-cart/tender-cart.component";

import {NewsModel} from "../Common/News/news.model";
import {NewsComponent} from "../Common/News/news.component";
import {TenderFeaturesModel} from "../Common/Tender-Features/tender-features.model";
import {TenderFeaturesComponent} from "../Common/Tender-Features/tender-features.component";
import {NgClass} from "@angular/common";
import {LoginComponent} from "../login/login.component";
import {CommonService} from "../common.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, TenderCartComponent, NewsComponent, TenderFeaturesComponent, NgClass, LoginComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  authenticate : string | null = null;
  tenderCarts: TenderCart[] | null;
  allNews: NewsModel[] | null;
  tenderFeatures: TenderFeaturesModel[]| null;

  constructor(private _common:CommonService) {
    this.tenderCarts=this._common.tenderCarts;
    this.allNews=this._common.allNews;
    this.tenderFeatures=this._common.tenderFeatures;
  }



  // // backgroundColor: string = 'bg-white'; // default background color
  // // toggleBackgroundColor() {
  // //   this.backgroundColor = this.backgroundColor === 'bg-white' ? 'bg-gray-200' : 'bg-white';
  // }

}
