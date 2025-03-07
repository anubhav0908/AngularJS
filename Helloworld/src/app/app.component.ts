import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello from BridgeLabz';
  imgUrl = 'https://www.bridgelabz.com/assets/images/BridgeLabz-logo.png'; 
  websiteUrl = 'https://www.bridgelabz.com';
  userName: string = ''; // ✅ Store user input

  openWebsite() {
    window.open(this.websiteUrl, '_blank');
  }
}
