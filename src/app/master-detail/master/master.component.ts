import {AfterContentInit, AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {DetailComponent} from '../detail/detail.component';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements AfterViewInit {

  message

  @ViewChild(DetailComponent, {static: false})
  detail: DetailComponent


  message2:string;

  message3:string;

  receiveMessage($event) {
    this.message2 = $event
  }

  constructor() { }

  ngOnInit() {

  }
  ngAfterViewInit() {
    this.detail.boodschap = "first message from view child"
  }

  sendAttr() {
    this.message = "message from master"
  }

  sendViewChild() {
    this.detail.boodschap = "second message from view child"
  }
}
