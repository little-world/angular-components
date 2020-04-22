import {Component, Input, OnInit} from '@angular/core';
import {FirstComponent} from '../first/first.component';

@Component({
  selector: 'app-naast-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

 @Input()
 nabour:  FirstComponent

  secondmessage

  constructor() { }

  ngOnInit() {
   this.secondmessage = this.nabour.message
  }

}
