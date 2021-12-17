import { Component, OnInit, TemplateRef } from '@angular/core';

import { Popover } from '../../popover/services/popover.service';

@Component({
  selector: 'app-app-popover',
  templateUrl: './app-popover.component.html',
  styleUrls: ['./app-popover.component.scss']
})
export class AppPopoverComponent implements OnInit {
  constructor(private popover: Popover) {}

  ngOnInit(): void {
  }

  show(content: TemplateRef<any>, origin: HTMLElement) {
    const ref = this.popover.open<{ skills: number[] } | any>({
      content,
      origin,
      data: {
        skills: [1, 2, 3, 4, 5]
      }
    });

    ref.afterClosed$.subscribe(res => {
      const { skills } = res.data;
      console.log("AppComponent - ref.afterClosed$: ", { skills });
    });

  }
}
