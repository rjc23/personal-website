import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('aboutme') about!: ElementRef;
  @ViewChild('workexp') workexp!: ElementRef;
  @ViewChild('projects') projects!: ElementRef;

  constructor(private scroller: ViewportScroller) {}

  ngOnInit(): void {
    AOS.init();
  }

  hobbies = [
    {
      title: "Homebrewing",
      imgSrc: "brew.png",
      content: "I enjoy homebrewing with friends, our best was a chocolate and coffee stout."
    },
    {
      title: "Wheelchair Basketball",
      imgSrc: "bball.png",
      content: "I have been playing wheelchair basketball for two years, it's great fun!"
    }
  ]
  skills = [
    {
      title: "Angular 2+",
      imgSrc: "angular.png",
      content: "I have used Angular 2+ in a number of applications etc.... TODO"
    },
  ]

  getNotification(el:any) {
    this.scroller.setOffset([0, 150]);
    switch(el) {
      case "about":
        this.scroller.scrollToAnchor("about");
        break;
      case "experience":
        this.scroller.scrollToAnchor("experience")
        break;
      case "projects":
        this.scroller.scrollToAnchor("projects")
        break;
    }
  }
}
