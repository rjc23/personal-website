import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent  {

  @Output() notifyParent: EventEmitter<any> = new EventEmitter();
  burgerOpen: boolean = false;
  sendNotification(value: string) {
      this.notifyParent.emit(value);
      this.burgerOpen = false;
  }

  navItems = [
    {
      id: "about",
      number: "01.",
      text: "About Me"
    },
    {
      id: "experience",
      number: "02.",
      text: "Experience"
    },
    {
      id: "projects",
      number: "03.",
      text: "Projects"
    },
    {
      id: "contact",
      number: "04.",
      text: "Contact"
    },
    {
      id: "games",
      number: "05.",
      text: "Games",
      href: "https://games.ryancarmody.dev"
    },
  ]

  getDelay(el: any) {
    return 250*el;
  }

  toggleBurger() {
    this.burgerOpen = !this.burgerOpen;
  }
}
