import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent {

  jobs = [
    {
      active: false,
      company: "Your Company",
      role: "Web Developer",
      when: "Soon - Future",
      desc: [
        "Making kick ass web applications",
        "Being part of cross-functional team",
        "Being a banter-saurous Rex."
      ]
    },
    {
      active: true,
      company: "Adelaide Uni",
      role: "Tutor",
      when: "Feb 2022 - Present",
      desc: [
        "I tutor ENG 1002 - Introduction to Programming (Matlab & C)",
        "Develop relationships with students and act as a mentor",
        "Facilitate tutorial and workshop sessions"
      ]
    },
    {
      active: false,
      company: "RAA",
      role: "Web Developer",
      when: "Jan 2020 - Jan 2022",
      desc: [
        "Worked on multiple projects using Angular 2+ and .NET",
        "Work as apart of a cross-functional team",
        "Was part of both the Intern and Graduate programs."
      ]
    },
    {
      active: false,
      company: "Tours Around Adelaide",
      role: "Owner & Tour Guide",
      when: "Oct 2016 - Dec 2020",
      desc: [
        "Created Adelaide's first tips based walking tour",
        "Showed over 6000 people from over 50 countries around the city",
        "Managed all aspects of the business, including the website, bookings, accounting, marketing etc."
      ]
    },
  ]

  selected = this.jobs[1];

  changeJobs(index: number) {
    this.selected.active = false;
    this.selected = this.jobs[index];
    this.selected.active = true;
  }
}
