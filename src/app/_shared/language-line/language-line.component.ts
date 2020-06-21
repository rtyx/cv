import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-language-line',
  templateUrl: './language-line.component.html',
  styleUrls: ['./language-line.component.scss']
})
export class LanguageLineComponent implements OnInit {

  @Input() lang: string;
  @Input() level: string;
  @Input() last: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
