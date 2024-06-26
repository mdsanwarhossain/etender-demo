import {Component, Input} from '@angular/core';
import {NewsModel} from "./news.model";

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent {
  @Input() allNews: NewsModel[] | null = null;

}
