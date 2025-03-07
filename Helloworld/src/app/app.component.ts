import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello from BridgeLabz';
  imgUrl = 'https://www.bridgelabz.com/assets/images/BridgeLabz-logo.png'; // Logo URL
  websiteUrl = 'https://www.bridgelabz.com'; // Website URL

  openWebsite() {
    window.open(this.websiteUrl, '_blank'); // Opens in a new tab
  }
}
