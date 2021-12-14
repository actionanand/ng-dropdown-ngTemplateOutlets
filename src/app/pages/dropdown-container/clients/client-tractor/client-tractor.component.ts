import { Component, OnInit } from '@angular/core';

import * as myClientData from '../client-data.json';

@Component({
  selector: 'app-client-tractor',
  templateUrl: './client-tractor.component.html',
  styleUrls: ['./client-tractor.component.sass']
})
export class ClientTractorComponent implements OnInit {

  clientDataObj: any = (myClientData as any).default;

  constructor() {}

  ngOnInit(): void {
  
  }

  tractors = this.clientDataObj.tractors;
}
