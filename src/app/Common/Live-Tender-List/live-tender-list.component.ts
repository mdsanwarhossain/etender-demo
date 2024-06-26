import {Component, Input} from '@angular/core';
import {NewsModel} from "../News/news.model";
import {NavbarComponent} from "../../Layout/Navbar/navbar.component";
import {FooterComponent} from "../../Layout/Footer/footer.component";
import {MatPaginator} from "@angular/material/paginator";
import {DatePipe} from "@angular/common";
import {CommonService} from "../../common.service";
import {FormsModule} from "@angular/forms";
import {FilterPipe} from "../../filter.pipe";

@Component({
  selector: 'app-live-tender-list',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    MatPaginator,
    DatePipe,
    FormsModule,
    FilterPipe
  ],
  templateUrl: './live-tender-list.component.html',
  styleUrl: './live-tender-list.component.scss'
})
export class LiveTenderListComponent {
  tenders: any;
  searchtext: any;

constructor(private _common:CommonService) {
 this.tenders= this._common.tenders;
}
}
