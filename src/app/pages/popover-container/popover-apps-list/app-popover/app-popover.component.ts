import { Component, OnInit, TemplateRef, ViewEncapsulation } from '@angular/core';

import { Popover } from '../../popover/services/popover.service';

@Component({
  selector: 'app-app-popover',
  templateUrl: './app-popover.component.html',
  styleUrls: ['./app-popover.component.scss'],
  // encapsulation: ViewEncapsulation.None 
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
      },
      // width: '30px', // width of the popover
      backdropClass: 'my-custom-backdrop-for-this-component' // make ViewEncapsulation as none to get the effect
    });

    ref.afterClosed$.subscribe(res => {
      const { skills } = res.data;
      console.log("AppComponent - ref.afterClosed$: ", { skills });
    });

  }
}
