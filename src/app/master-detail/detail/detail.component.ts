import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MasterComponent} from '../master/master.component';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input()
  message


  @Input()
  master: MasterComponent
  @Output()
  messageEvent = new EventEmitter<string>();


  boodschap
  constructor() { }

  send() {
     this.messageEvent.emit("message from child")

  }

  ngOnInit() {
    this.master.message3 = "from the Detail"

  }

}
