import { Component, OnInit } from '@angular/core';
import {ViaService} from '../via.service';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.css']
})
export class SenderComponent implements OnInit {

  constructor(private viaService: ViaService) { }

  ngOnInit() {
  }

  send() {
    this.viaService.sendMessage("hallo")
  }
}
