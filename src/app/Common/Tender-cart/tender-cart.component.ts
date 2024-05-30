import {Component, Input} from '@angular/core';
import {TenderCart} from "./tender-cart.model";
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
@Component({
  selector: 'app-tender-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tender-cart.component.html',
  styleUrl: './tender-cart.component.scss'
})
export class TenderCartComponent {
   @Input() tenderCarts : TenderCart[] | null = null;
   trustedSvgString: SafeHtml | null = null;
   svgString : string = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M14 19.9995V21.9996H2V19.9995H14ZM14.586 0.685547L22.364 8.46355L20.95 9.87955L19.89 9.52555L17.413 11.9995L23.07 17.6565L21.656 19.0705L16 13.4135L13.596 15.8176L13.879 16.9496L12.464 18.3636L4.686 10.5855L6.101 9.17155L7.231 9.45355L13.525 3.16055L13.172 2.10055L14.586 0.685547ZM15.293 4.22155L8.222 11.2915L11.757 14.8276L18.828 7.75755L15.293 4.22155Z" fill="white"/></svg>';
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    // Mark the SVG string as trusted
    this.trustedSvgString = this.sanitizer.bypassSecurityTrustHtml(this.svgString);
  }

}
