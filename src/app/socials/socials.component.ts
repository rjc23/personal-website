import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.scss']
})
export class SocialsComponent implements OnInit {

  socials = [
    {
      name: "GitHub",
      imgSrc: "github.png",
      link: "https://github.com/rjc23"
    },
    {
      name: "LinkedIn",
      imgSrc: "linkedin.png",
      link: "https://www.linkedin.com/in/ryanjcarmody/"
    },
    // {
    //   name: "Twitter",
    //   imgSrc: "twitter.png",
    //   link: "https://twitter.com"
    // },
    {
      name: "YouTube",
      imgSrc: "youtube.png",
      link: "https://www.youtube.com/channel/UCGTXoUNS6EeBpW-wta7phqQ"
    },
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
