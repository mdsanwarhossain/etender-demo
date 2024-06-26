import { Routes } from '@angular/router';
import {HomeComponent} from "./Home/home.component";
import {NewsEventComponent} from "./Common/News-Event/news-event.component";
import {LoginComponent} from "./login/login.component";
import {LiveTenderListComponent} from "./Common/Live-Tender-List/live-tender-list.component";
import {SideMenuComponent} from "./side-menu/side-menu.component";
import {SideMenusComponent} from "./side-menus/side-menus.component";
// import {FeaturedTenderComponent} from "./Common/Featured-Tender/featured-tender.component";

export const routes: Routes = [
  {
    path : '',
    component : HomeComponent,
    title: 'BRAC e-Tender'
  },
  {
    path : 'news/list',
    component : NewsEventComponent,
    title: 'BRAC e-Tender'
  },
  {
    path : 'tender/liveTenderTemplate',
    component : LiveTenderListComponent,
    title: 'BRAC e-Tender'
  },
  {
    path : 'dashboard',
    component : SideMenuComponent,
    title: 'BRAC e-Tender'
  }
];
