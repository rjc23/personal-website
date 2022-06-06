import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    {
      title: "Retro Snake",
      imgSrc: "retrosnake.png",
      information: [
        "I loved this game back in the day. I would always ask my Dad if I could borrow his Nokia phone so I could play.",
        "I had been learning more about building reactive apps with RxJS in Angular, using the async pipe to subscribe to state. This was my attempt at building a completely reactive Angular application."
      ],
      tech: [
        "Angular",
        "RxJS",
        "Firebase hosting"
      ]
    },
    {
      title: "Odds Pony",
      imgSrc: "oddspony.png",
      information: [
        "I wanted a project where I could handle thousands of points of data.",
        "I came across an odds API and looked into what I could do with it. I make a commission every time someone buys an API key."
      ],
      tech: [
        "Angular",
        "RxJS",
        "Firebase hosting",
        "Stripe API",
        "Sendgrid API",
        "Node.js",
        "RESTful APIs"
      ]
    },
    {
      title: "Your Budget Summary",
      imgSrc: "yourbudgetsummary.png",
      information: [
        "My first personal project in Angular",
        "I wanted to build something with forms and state management."
      ],
      tech: [
        "Angular",
        "Firebase hosting"
      ]
    },

  ]
}
