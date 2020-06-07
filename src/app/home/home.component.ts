import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private title: Title) {
  }

  ngOnInit() {
    this.title.setTitle('RafaelToledanoIllan');
    console.log(`%c
 _____ _____ __ __ __ __
| __  |_   _|  |  |  |  |
|    -| | | |_   _|-   -|
|__|__| |_|   |_| |__|__|
    `, 'color: rgb(145, 121, 157); font-weight: bold;');
    console.log(`Hi there! Nice to see you here.`);
    console.log(`As most things on the web, this is a work in progress. If you'd like to see some of my work, please visit some of the link on the left.`);
    console.log(`Thanks!`);
    console.log('');
    console.log('https://www.rtyx.es');
  }

}
