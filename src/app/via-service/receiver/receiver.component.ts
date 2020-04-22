import { Component, OnInit } from '@angular/core';
import {ViaService} from '../via.service';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.css']
})
export class ReceiverComponent implements OnInit {

  constructor(private viaService: ViaService) { }

  message

  ngOnInit() {
    this.viaService.getMessage().subscribe(
      msg => this.message = msg
    )
  }

}
