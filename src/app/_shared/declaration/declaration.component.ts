import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-declaration',
  templateUrl: './declaration.component.html',
  styleUrls: ['./declaration.component.scss']
})
export class DeclarationComponent implements OnInit {

  @Input() modifiers: string;
  @Input() identifier: string;
  @Input() type: string;
  @Input() value: string;
  @Input() href: string;
  @Input() indent: number;

  constructor() {
  }

  ngOnInit() {
  }

}
