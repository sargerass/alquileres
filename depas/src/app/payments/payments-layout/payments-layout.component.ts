import { Component, OnInit } from '@angular/core';
import { NgEventBus } from 'ng-event-bus';

@Component({
  selector: 'app-payments-layout',
  templateUrl: './payments-layout.component.html',
  styleUrls: ['./payments-layout.component.scss']
})
export class PaymentsLayoutComponent implements OnInit {

  constructor( private eventBust: NgEventBus) { }

  ngOnInit() {
    this.eventBust.on('test').subscribe( res => {
      console.log('llego', res);
    })
  }

}
