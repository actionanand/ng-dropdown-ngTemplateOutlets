import { Component, OnInit, TemplateRef, ViewEncapsulation } from '@angular/core';

import { Popover } from '../../popover/services/popover.service';
import { InsidePopoverComponent } from '../inside-popover/inside-popover.component';

@Component({
  selector: 'app-app-popover',
  templateUrl: './app-popover.component.html',
  styleUrls: ['./app-popover.component.scss'],
  // encapsulation: ViewEncapsulation.None 
})
export class AppPopoverComponent implements OnInit {
  popoverString = 'my string';

  constructor(private popover: Popover) {}

  ngOnInit(): void {
  }

  show(content: TemplateRef<any>, origin: HTMLElement, popoverType: string) {
    let contentToBeRendered: TemplateRef<any> | string | any;
    
    if(popoverType === 'component') {
      contentToBeRendered = InsidePopoverComponent;
    } else if(popoverType === 'template') {
      contentToBeRendered = content;
    } else {
      contentToBeRendered = this.popoverString;
    }

    const ref = this.popover.open<{ skills: number[] } | any>({
      content: contentToBeRendered,
      origin,
      data: { 
        skills: [1, 2, 3, 4, 5]
      },
      // width: '30px', // width of the popover
      backdropClass: 'my-custom-backdrop-for-this-component' // make ViewEncapsulation as none to get the effect or use ::ng-deep
    });

    ref.afterClosed$.subscribe(res => {
      const { skills } = res.data;
      console.log("AppComponent - ref.afterClosed$: ", { skills });
    });

  }
}
