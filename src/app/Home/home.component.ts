import { Component } from '@angular/core';
import {NavbarComponent} from "../Layout/Navbar/navbar.component";
import {FooterComponent} from "../Layout/Footer/footer.component";
import {TenderCart} from "../Common/Tender-cart/tender-cart.model";
import {TenderCartComponent} from "../Common/Tender-cart/tender-cart.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,TenderCartComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  authenticate : string | null = null;
  tenderCarts : TenderCart[] = [
    {
      "id" : 1,
      "bg" : "bg-amber-500",
      "rowBg" : "bg-amber-600",
      "name" : "LIVE TENDER",
      "logo" : '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M14 19.9995V21.9996H2V19.9995H14ZM14.586 0.685547L22.364 8.46355L20.95 9.87955L19.89 9.52555L17.413 11.9995L23.07 17.6565L21.656 19.0705L16 13.4135L13.596 15.8176L13.879 16.9496L12.464 18.3636L4.686 10.5855L6.101 9.17155L7.231 9.45355L13.525 3.16055L13.172 2.10055L14.586 0.685547ZM15.293 4.22155L8.222 11.2915L11.757 14.8276L18.828 7.75755L15.293 4.22155Z" fill="white"/></svg>'
    },
    {
      "id" : 2,
      "bg" : "bg-violet-400",
      "rowBg" : "bg-violet-500",
      "name" : "CLOSE TODAY",
      "logo" : '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M17 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H7V1H9V3H15V1H17V3ZM15 5H9V7H7V5H4V9H20V5H17V7H15V5ZM20 11H4V19H20V11ZM6 14H8V16H6V14ZM10 14H18V16H10V14Z" fill="white"/></svg>'
    },
    {
      "id" : 3,
      "bg" : "bg-sky-400",
      "rowBg" : "bg-sky-500",
      "name" : "NEW TENDER NOTICE",
      "logo" : '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6.53627 3H21.0013C21.2665 3 21.5208 3.10536 21.7084 3.29289C21.8959 3.48043 22.0013 3.73478 22.0013 4V20C22.0013 20.2652 21.8959 20.5196 21.7084 20.7071C21.5208 20.8946 21.2665 21 21.0013 21H6.53627C6.37168 21 6.20963 20.9594 6.06449 20.8818C5.91935 20.8042 5.79562 20.6919 5.70427 20.555L0.371275 12.555C0.261636 12.3907 0.203125 12.1975 0.203125 12C0.203125 11.8025 0.261636 11.6093 0.371275 11.445L5.70427 3.445C5.79562 3.30808 5.91935 3.19583 6.06449 3.11821C6.20963 3.04058 6.37168 2.99998 6.53627 3ZM7.07127 5L2.40527 12L7.07127 19H20.0013V5H7.07127ZM16.0013 11V13H9.00128V11H16.0013Z" fill="white"/></svg>'
    },
    {
      "id" : 4,
      "bg" : "bg-emerald-400",
      "rowBg" : "bg-emerald-500",
      "name" : "AWARD TENDER",
      "logo" : '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 4.604V13.789C5.00001 14.4475 5.16257 15.0957 5.47326 15.6763C5.78395 16.2568 6.23315 16.7517 6.781 17.117L12 20.597L17.219 17.117C17.7667 16.7518 18.2158 16.2571 18.5265 15.6767C18.8372 15.0964 18.9998 14.4483 19 13.79V4.604L12 3.05L5 4.604ZM3.783 2.826L12 1L20.217 2.826C20.4391 2.87536 20.6377 2.99897 20.78 3.1764C20.9224 3.35384 21 3.57452 21 3.802V13.789C20.9999 14.7767 20.756 15.7492 20.2899 16.62C19.8238 17.4908 19.1499 18.2331 18.328 18.781L12 23L5.672 18.781C4.85027 18.2332 4.17646 17.4911 3.71035 16.6205C3.24424 15.7498 3.00024 14.7776 3 13.79V3.802C3.00004 3.57452 3.07764 3.35384 3.21999 3.1764C3.36234 2.99897 3.56094 2.87536 3.783 2.826ZM12 13.5L9.061 15.045L9.622 11.773L7.245 9.455L10.531 8.977L12 6L13.47 8.977L16.755 9.455L14.378 11.773L14.938 15.045L12 13.5Z" fill="white"/></svg>'
    }
  ];
}
