import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: false,
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {



  isNavOpen = false;

  // Toggle mobile navigation visibility
  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
  }

  // Close mobile navigation if clicked outside the menu
  closeNav() {
    this.isNavOpen = false;
  }

}
