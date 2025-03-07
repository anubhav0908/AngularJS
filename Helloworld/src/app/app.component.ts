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
  userName: string = ''; 
  isValid: boolean = true; // ✅ Tracks input validation

  openWebsite() {
    window.open(this.websiteUrl, '_blank');
  }

  validateInput() {
    const nameRegex = /^[A-Z][a-zA-Z]{2,}$/; // ✅ Regex for validation
    this.isValid = nameRegex.test(this.userName); // ✅ Checks if input matches the pattern
  }
}
