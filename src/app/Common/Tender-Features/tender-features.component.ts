import {Component, Input} from '@angular/core';

import {TenderCart} from "../Tender-cart/tender-cart.model";
import {NgOptimizedImage} from "@angular/common";
import {CommonService} from "../../common.service";
import {TenderFeaturesModel} from "./tender-features.model";



@Component({
  selector: 'app-tender-features',
  standalone: true,

  imports: [
    NgOptimizedImage
  ],
  templateUrl: './tender-features.component.html',
  styleUrl: './tender-features.component.scss'
})
export class TenderFeaturesComponent {
  @Input() tenderFeatures: TenderFeaturesModel[] | null=null;

  leftside: number = 0;
  rightside: number = 2;

  previous() {
    if (this.leftside > 0) {
      this.leftside--;
      this.rightside--;
    }
  }

  next() {
    if (this.rightside < this.tenderFeatures!.length) {
      this.leftside++;
      this.rightside++;
    }
  }

}
