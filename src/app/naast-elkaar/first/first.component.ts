import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-naast-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  message = "hallo"

  constructor() { }

  ngOnInit() {
  }

}
