import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-framework-line',
  templateUrl: './framework-line.component.html',
  styleUrls: ['./framework-line.component.scss']
})
export class FrameworkLineComponent implements OnInit {

  @Input() id: string;
  @Input() level: string;
  @Input() last: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
