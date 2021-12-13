import { Component, ContentChild, EventEmitter, Input, Output, TemplateRef } from '@angular/core';

import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-my-selector',
  templateUrl: './my-selector.component.html',
  styleUrls: ['./my-selector.component.sass']
})
export class MySelectorComponent<T extends { name: string }> {

  picked!: T;

  @Input() label!: string;
  
  @Input() options!: T[];

  @Input('selectedTemplate') selectedTemplateRef!: TemplateRef<any>;

  @ContentChild('optionTemplate') optionTemplateRef!: TemplateRef<any>;

  @Output() selectionChanged = new EventEmitter<T>();

  isDropDownOpen = false;

  iconDown = faCaretDown;
  iconUp = faCaretUp;

  selectOption(option: T) {
    this.picked = option;
    this.selectionChanged.emit(option);
    this.isDropDownOpen = !this.isDropDownOpen;
  }

  onClickOutside(event: boolean) {
    event ? this.isDropDownOpen = false : ''
    
  }

  // setting this as async to create a deley(onClickOutside emits true in the begining)
  onFlipFlopDropdown() {
    setTimeout(() => {
      this.isDropDownOpen = !this.isDropDownOpen
    }, 0)
  }

}
