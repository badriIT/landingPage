import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  

openStates: { [key: string]: boolean } = {
    'faq1': false,
    'faq2': false,
    'faq3': false,
    'faq4': false
  };

  

  toggleFaq(faqId: string): void {
    // If clicking on already open FAQ, just close it
    if (this.openStates[faqId]) {
      this.openStates[faqId] = false;
    } else {
      // Close all other FAQs first
      Object.keys(this.openStates).forEach(key => {
        this.openStates[key] = false;
      });
      // Then open the clicked one
      this.openStates[faqId] = true;
    }
  }

  isOpen(faqId: string): boolean {
    return this.openStates[faqId];
  }

}
