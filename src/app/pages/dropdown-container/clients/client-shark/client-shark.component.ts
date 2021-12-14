import { Component, OnInit } from '@angular/core';

import { faSkullCrossbones, faSwimmer } from '@fortawesome/free-solid-svg-icons';

import * as myClientData from '../client-data.json';

export interface Shark {
  name: string;
  latinName: string;
  status: string;
}

@Component({
  selector: 'app-client-shark',
  templateUrl: './client-shark.component.html',
  styleUrls: ['./client-shark.component.sass']
})
export class ClientSharkComponent implements OnInit {

  clientDataObj: any = (myClientData as any).default;

  constructor() {}

  ngOnInit(): void {
  }

  sharks: Shark[] = this.clientDataObj.sharks;
  safeSharks = ['Angular roughshark', 'Pyjama'];
  selectedShark: Shark = {} as Shark;

  displayFunc = (shark: Shark) => {
    return `${shark.name} (${shark.latinName})`;
  };

  getSwimIcon = (shark: Shark) => {
    const icon = this.safeSharks.indexOf(shark.name) >= 0 ? faSwimmer : faSkullCrossbones;
    return icon;
  };
}
