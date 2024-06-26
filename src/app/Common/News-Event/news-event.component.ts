import {Component, Input} from '@angular/core';
import {NavbarComponent} from "../../Layout/Navbar/navbar.component";
import {FooterComponent} from "../../Layout/Footer/footer.component";
import {NewsModel} from "../News/news.model";
import {NewsComponent} from "../News/news.component";
import {CommonService} from "../../common.service";


@Component({
  selector: 'app-news-event',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    NewsComponent
  ],
  templateUrl: './news-event.component.html',
  styleUrl: './news-event.component.scss'
})
export class NewsEventComponent {
  // @Input() allNews: NewsModel[] | null = null;
  allNews: NewsModel[] | null;
  constructor(private _commom:CommonService) {
    this.allNews=this._commom.allNews;
  }
}
