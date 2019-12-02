import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  @Input() summary: string;
  @Input() location: string;
  @Input() end: string;
  @Input() start: string;
  @Input() position: string;
  @Input() identifier: string;
  @Input() statement: string = 'const';

  constructor() {
  }

  ngOnInit() {
  }

}
