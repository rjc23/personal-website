import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent  {

  @Output() notifyParent: EventEmitter<any> = new EventEmitter();
  sendNotification(value: string) {
      this.notifyParent.emit(value);
  }

  navItems = [
    {
      id: "about",
      number: "01.",
      text: "About me"
    },
    {
      id: "experience",
      number: "02.",
      text: "Experience"
    },
    {
      id: "projects",
      number: "03.",
      text: "My work"
    },
    {
      id: "contact",
      number: "04.",
      text: "Contact"
    },
  ]

  getDelay(el: any) {
    return 250*el;
  }
}
