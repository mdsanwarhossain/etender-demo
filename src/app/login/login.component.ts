import { Component, OnInit } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  closeLoginPopup() {
    const loginPopup = document.getElementById('login-popup');
    if (loginPopup) {
      loginPopup.classList.add('hidden');
    }
  }

  handleSubmit($event: SubmitEvent) {

  }
}
