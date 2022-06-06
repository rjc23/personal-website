import { AfterContentInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements AfterContentInit{

  isReverse = false;

  @Input() project!: any;
  @Input() index!: any;

  ngAfterContentInit(): void {
    if(this.index % 2 === 0) {
      this.isReverse = true;
    }
  }

}
