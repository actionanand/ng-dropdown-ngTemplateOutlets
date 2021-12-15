import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-select',
  templateUrl: './ng-select.component.html',
  styleUrls: ['./ng-select.component.sass']
})
export class NgSelectComponent implements OnInit {

  constructor() { }

  items = Array.from({ length: 10000 }).map((_, i) => ({
    id: i,
    label: `Item #${i}`
  }));

  change($event: any) {
  }

  ngOnInit(): void {
  }

}
