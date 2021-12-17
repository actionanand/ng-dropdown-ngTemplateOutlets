import { Component, OnInit } from '@angular/core';

import { PopoverRef } from '../../popover/shared/popover-ref';

@Component({
  templateUrl: './inside-popover.component.html',
  styleUrls: ['./inside-popover.component.scss']
})
export class InsidePopoverComponent implements OnInit {

  skills;
  
  constructor(private popoverRef: PopoverRef) {
    this.skills = this.popoverRef.data.skills;
  }

  ngOnInit(): void {
  }

  close() {
    this.popoverRef.close({ id: 1 });
  }

}
