import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    {
      title: "GAMES.ryancarmody",
      imgSrc: "games.png",
      links: [
        {
          name: "github",
          icon: "github.png",
          link: "https://github.com/rjc23/games-two"
        },
        {
          name: "webiste",
          icon: "link.png",
          link: "https://games.ryancarmody.dev"
        }
      ],
      information: [
        "A place to find all the game I have made. Can now link games I have made back here. First time in a while making a website in a framework other than Angular 2+.",
      ],
      tech: [
        "Nuxt.js",
        "Vercel hosting",
        "Subdomains",
        "CSS animations",
        "Server side rendering"
      ]
    },
    {
      title: "Worldle",
      imgSrc: "worldle.png",
      links: [
        {
          name: "github",
          icon: "github.png",
          link: "https://github.com/rjc23/worldle"
        },
        {
          name: "webiste",
          icon: "link.png",
          link: "https://playworldle.com"
        }
      ],
      information: [
        "The game where you get six guesses to try and guess which country it is. Choose from 3 game modes.",
      ],
      tech: [
        "Angular",
        "RxJS",
        "Firebase hosting",
        "State management",
        "SCSS"
      ]
    },
    {
      title: "Retro Snake",
      imgSrc: "retrosnake.png",
      links: [
        {
          name: "github",
          icon: "github.png",
          link: "https://github.com/rjc23/snake"
        },
        {
          name: "webiste",
          icon: "link.png",
          link: "https://playretrosnake.com"
        }
      ],
      information: [
        "A completely reactive Angular app of the famous Nokia snake. I really got a chance to refine my RxJS and state management skills in this project.",
      ],
      tech: [
        "Angular",
        "RxJS",
        "Firebase hosting",
        "State management"
      ]
    },
    {
      title: "Odds Pony",
      imgSrc: "oddspony.png",
      links: [
        {
          name: "webiste",
          icon: "link.png",
          link: "https://oddspony.com"
        }
      ],
      information: [
        "This is a site that scans thousands of betting odds and presents meaningful analytics.",
        "I created this end to end with an Angular front end, Node.js backend, MongoDB for the database. "
      ],
      tech: [
        "Angular",
        "RxJS",
        "MongoDB",
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
      links: [
        {
          name: "webiste",
          icon: "link.png",
          link: "https://yourbudgetsummary.com"
        }
      ],
      information: [
        "This was my first personal project using a JavaScript framework. It is a website that takes in your income and expenses and displays them in a meaningful way. ",
        "I learnt a lot about forms and state management from this project."
      ],
      tech: [
        "Angular",
        "Firebase hosting"
      ]
    },

  ]
}
