import { Pipe, PipeTransform } from '@angular/core';
import {CommonService} from "./common.service";

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {
//    tenders: any;
// constructor(private _common:CommonService) {
//   this.tenders=this._common.tenders;
// }
  transform(value: any, args: any): any {
    if (!value) return null;
    if (!args) return value;
    args=args.toLowerCase();
    return value.filter(function (tenders: any){
     return JSON.stringify(tenders).toLowerCase().includes(args);
    })
  }

}
