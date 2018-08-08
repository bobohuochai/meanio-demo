import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'home',  // <home></home>
  styleUrls: [ './home.component.scss' ],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    ngOnInit() {
       $('#demotest').css('color','red');
    }
}