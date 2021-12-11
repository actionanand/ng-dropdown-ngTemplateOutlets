import { Component, ContentChild, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';

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

  selectOption(option: T) {
    this.picked = option;
    this.selectionChanged.emit(option);
  }
}
